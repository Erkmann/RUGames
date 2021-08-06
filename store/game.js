export const state = () => ({
    game: {
        nome: '',
        empresa: '',
        imagem: '',
        ano: ''
    }
  })
  
export const mutations = {
    clearGame(state) {
        state.game = {
            nome: '',
            empresa: '',
            imagem: '',
            ano: ''
        }
    },

    setGame(state, newGame) {
        state.game = newGame
    }
}