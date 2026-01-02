import { create } from "zustand";

const useGameStore = create((set) => ({
    player: Math.random() < 0.5 ? 0 : 1,
    player1: "",
    player2: "",
    gotPlayers: false,
    winnerName: "",

    changePlayer: () => set((state) => ({ player: state.player === 0 ? 1 : 0 })),
    playersReady: () => set({ gotPlayers: true }),
    changePlayer1: (val) => set({ player1: val }),
    changePlayer2: (val) => set({ player2: val }),
    changeWinnerName: (val) => set({ winnerName: val }),
    rematch: () => {
        set({ player: Math.random() < 0.5 ? 0 : 1})
        set({ winnerName: "" })
        set({ gotPlayers: true })
    },

    resetGame: () => {
        set({ player: Math.random() < 0.5 ? 0 : 1})
        set({ player1: "" })
        set({ player2: "" })
        set({ gotPlayers: false })
        set({ winnerName: "" })
    }
}));

export default useGameStore;