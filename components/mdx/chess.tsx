"use client";

import { useMemo, useState } from "react";
import * as Slider from "@radix-ui/react-slider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PieceType = "p" | "n" | "b" | "r" | "q" | "k";
type Color = "w" | "b";
interface Piece {
  type: PieceType;
  color: Color;
}
type Board = (Piece | null)[][];
type Move = [number, number];

const GLYPH: Record<PieceType, Record<Color, string>> = {
  p: { w: "♙", b: "♟" },
  n: { w: "♘", b: "♞" },
  b: { w: "♗", b: "♝" },
  r: { w: "♖", b: "♜" },
  q: { w: "♕", b: "♛" },
  k: { w: "♔", b: "♚" }
};

const FILES = "abcdefgh";

function initialBoard(): Board {
  const back: PieceType[] = ["r", "n", "b", "q", "k", "b", "n", "r"];
  const board: Board = Array.from({ length: 8 }, () => Array(8).fill(null));
  for (let f = 0; f < 8; f++) {
    board[0][f] = { type: back[f], color: "b" };
    board[1][f] = { type: "p", color: "b" };
    board[6][f] = { type: "p", color: "w" };
    board[7][f] = { type: back[f], color: "w" };
  }
  return board;
}

const DIRS: Record<string, Move[]> = {
  n: [
    [-2, -1], [-2, 1], [-1, -2], [-1, 2],
    [1, -2], [1, 2], [2, -1], [2, 1]
  ],
  b: [
    [-1, -1], [-1, 1], [1, -1], [1, 1]
  ],
  r: [
    [-1, 0], [1, 0], [0, -1], [0, 1]
  ],
  q: [
    [-1, -1], [-1, 1], [1, -1], [1, 1], [-1, 0], [1, 0], [0, -1], [0, 1]
  ],
  k: [
    [-1, -1], [-1, 1], [1, -1], [1, 1], [-1, 0], [1, 0], [0, -1], [0, 1]
  ]
};

function pseudoLegalMoves(board: Board, r: number, c: number): Move[] {
  const piece = board[r][c];
  if (!piece) return [];
  const moves: Move[] = [];
  const inBounds = (rr: number, cc: number) => rr >= 0 && rr < 8 && cc >= 0 && cc < 8;

  if (piece.type === "p") {
    const dir = piece.color === "w" ? -1 : 1;
    const startRow = piece.color === "w" ? 6 : 1;
    if (inBounds(r + dir, c) && !board[r + dir][c]) moves.push([r + dir, c]);
    if (r === startRow && !board[r + dir][c] && !board[r + 2 * dir][c]) {
      moves.push([r + 2 * dir, c]);
    }
    for (const dc of [-1, 1]) {
      if (inBounds(r + dir, c + dc) && board[r + dir][c + dc]?.color === (piece.color === "w" ? "b" : "w")) {
        moves.push([r + dir, c + dc]);
      }
    }
  } else {
    const dirs = DIRS[piece.type];
    for (const [dr, dc] of dirs) {
      let rr = r + dr;
      let cc = c + dc;
      while (inBounds(rr, cc)) {
        const target = board[rr][cc];
        if (!target) {
          moves.push([rr, cc]);
        } else {
          if (target.color !== piece.color) moves.push([rr, cc]);
          break;
        }
        rr += dr;
        cc += dc;
      }
    }
  }
  return moves;
}

function toSAN(board: Board, from: Move, to: Move): string {
  const piece = board[from[0]][from[1]]!;
  const file = FILES[to[1]];
  const rank = String(8 - to[0]);
  const capture = board[to[0]][to[1]] ? "x" : "";
  const prefix = piece.type === "p" ? "" : piece.type.toUpperCase();
  return `${prefix}${capture}${file}${rank}`;
}

export function Chess() {
  const [board, setBoard] = useState<Board>(initialBoard);
  const [turn, setTurn] = useState<Color>("w");
  const [selected, setSelected] = useState<Move | null>(null);
  const [legal, setLegal] = useState<Move[]>([]);
  const [depth, setDepth] = useState(4);
  const [history, setHistory] = useState<string[]>([]);
  const [nodes, setNodes] = useState(1_400_000);
  const [evalScore, setEvalScore] = useState(0.3);

  const pv = useMemo(() => {
    const continuation = [
      "e4", "e5", "Nf3", "Nc6", "Bb5", "a6", "Ba4", "Nf6", "O-O"
    ];
    return [...history.slice(-4), ...continuation.slice(0, Math.max(0, depth - history.length + 2))].join("  ");
  }, [history, depth]);

  const handleSquare = (r: number, c: number) => {
    if (selected) {
      if (legal.some(([lr, lc]) => lr === r && lc === c)) {
        const from = selected;
        const san = toSAN(board, from, [r, c]);
        const next = board.map((row) => [...row]);
        next[r][c] = next[from[0]][from[1]];
        next[from[0]][from[1]] = null;
        setBoard(next);
        setHistory((h) => [...h, san]);
        setTurn((t) => (t === "w" ? "b" : "w"));
        setSelected(null);
        setLegal([]);
        const delta = (Math.random() - 0.42) * 0.7;
        setEvalScore((e) => Math.max(-3, Math.min(3, e + delta)));
        setNodes(Math.round(900 * Math.pow(depth, 1.8) * (0.8 + Math.random() * 0.5)));
        return;
      }
    }
    const piece = board[r][c];
    if (piece && piece.color === turn) {
      setSelected([r, c]);
      setLegal(pseudoLegalMoves(board, r, c));
    } else {
      setSelected(null);
      setLegal([]);
    }
  };

  const newGame = () => {
    setBoard(initialBoard());
    setTurn("w");
    setSelected(null);
    setLegal([]);
    setHistory([]);
    setEvalScore(0.3);
    setNodes(Math.round(900 * Math.pow(depth, 1.8)));
  };

  const evalBar = Math.max(0, Math.min(100, 50 + evalScore * 12));

  return (
    <div className="not-prose my-8 rounded-xl border border-line/10 bg-card shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line/8 px-5 py-3">
        <p className="mono-label">Engine console · {turn === "w" ? "White" : "Black"} to move</p>
        <Button size="sm" variant="outline" onClick={newGame}>
          New game
        </Button>
      </div>

      <div className="grid gap-6 p-5 lg:grid-cols-[auto_1fr]">
        {/* Board */}
        <div className="mx-auto">
          <div
            className="grid aspect-square w-[min(88vw,340px)] select-none grid-cols-8 overflow-hidden rounded-md border border-line/15 shadow-card"
            role="grid"
            aria-label="Chessboard"
          >
            {board.map((row, r) =>
              row.map((piece, c) => {
                const dark = (r + c) % 2 === 1;
                const isSel = selected?.[0] === r && selected?.[1] === c;
                const isLegal = legal.some(([lr, lc]) => lr === r && lc === c);
                const hasPiece = board[r][c] !== null;
                return (
                  <button
                    key={`${r}-${c}`}
                    onClick={() => handleSquare(r, c)}
                    aria-label={`${FILES[c]}${8 - r}`}
                    className={cn(
                      "relative flex items-center justify-center text-[clamp(20px,6vw,30px)] transition-colors",
                      dark ? "bg-[#b7c0cc] dark:bg-[#262b33]" : "bg-[#eef1f5] dark:bg-[#454c56]",
                      isSel && "ring-2 ring-inset ring-accent",
                      isLegal && "cursor-pointer",
                      !isSel && isLegal && hasPiece && "ring-2 ring-inset ring-accent/50",
                      !isSel && isLegal && !hasPiece && "after:absolute after:h-2.5 after:w-2.5 after:rounded-full after:bg-accent/50"
                    )}
                  >
                    {piece && (
                      <span className={piece.color === "w" ? "cp-white" : "cp-black"}>
                        {GLYPH[piece.type][piece.color]}
                      </span>
                    )}
                  </button>
                );
              })
            )}
          </div>
          <div className="mt-1.5 flex justify-between px-1 font-mono text-[10px] text-ink/40">
            <span>White</span>
            <span>Black</span>
          </div>
        </div>

        {/* Console */}
        <div className="flex flex-col gap-5">
          {/* Evaluation */}
          <div>
            <div className="mb-1.5 flex justify-between font-mono text-xs text-ink/60">
              <span>Evaluation</span>
              <span className={evalScore >= 0 ? "text-ink" : "text-ink"}>{evalScore.toFixed(2)}</span>
            </div>
            <div className="relative h-2.5 overflow-hidden rounded-full border border-line/10 bg-card">
              <div className="absolute inset-y-0 left-0 bg-up/80" style={{ width: `${evalBar}%` }} />
              <div className="absolute inset-y-0 left-1/2 w-px bg-line/20" />
            </div>
            <p className="mt-1 font-mono text-[10px] text-ink/40">
              {evalScore >= 0 ? "White is better" : "Black is better"}
            </p>
          </div>

          {/* Depth */}
          <div>
            <div className="mb-1.5 flex items-center justify-between font-mono text-xs text-ink/60">
              <span>Search depth</span>
              <span className="text-ink">{depth} ply</span>
            </div>
            <Slider.Root
              value={[depth]}
              min={1}
              max={6}
              step={1}
              onValueChange={([v]) => setDepth(v)}
              className="relative flex h-5 w-full touch-none items-center"
            >
              <Slider.Track className="relative h-1 flex-1 rounded-full bg-line/10">
                <Slider.Range className="absolute h-full rounded-full bg-accent" />
              </Slider.Track>
              <Slider.Thumb
                className="block h-4 w-4 rounded-full border border-line/15 bg-card shadow-card focus-visible:outline-2 focus-visible:outline-accent"
                aria-label="Search depth"
              />
            </Slider.Root>
          </div>

          {/* Nodes */}
          <div className="rounded-lg border border-line/10 bg-muted p-4 font-mono text-xs">
            <p className="mb-1 text-ink/40">Nodes searched</p>
            <p className="text-lg font-semibold text-ink">{nodes.toLocaleString("en-US")}</p>
            <p className="mt-1 text-ink/40">nps ≈ 1.2M</p>
          </div>

          {/* PV */}
          <div className="rounded-lg border border-line/10 bg-muted p-4">
            <p className="mb-1.5 font-mono text-[10px] uppercase tracking-wider text-ink/40">
              Principal variation
            </p>
            <p className="font-mono text-[13px] leading-relaxed text-ink/80">{pv}</p>
          </div>

          <p className="font-mono text-[10px] leading-relaxed text-ink/35">
            Demo board · pseudo-legal moves · simulated search metrics. Move a piece to update the console.
          </p>
        </div>
      </div>
    </div>
  );
}
