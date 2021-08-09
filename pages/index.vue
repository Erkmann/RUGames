<template>
  <b-row class="text-center my-4">
    <b-col cols="12" class="mb-4">
      <h1 class="h1 font-custom font-xl"><b-icon icon="joystick" /> RUGames</h1>
    </b-col>
    <b-col cols="8" offset="2">
      <div class="text-center">
        <h3 class="h3 font-custom">Games</h3>
      </div>
    </b-col>
    <b-col cols="2" class="text-right">
      <button @click="addModal.show = true" class="btn btn-primary btn-sm">
        <b-icon icon="plus"></b-icon>
      </button>
    </b-col>
    <template v-for="(game, index) in games">
      <b-col cols="12" md="4" class="text-left cursor-pointer" :key="index">
        <b-card
          class="my-3"
          @click="
            setGameAndRedirect(
              'Battlefield 2042',
              'EA',
              '2021',
              'https://www.oficinadanet.com.br/imagens/post/37687/battlefield-2042-post-capa.jpg'
            )
          "
          overlay
          img-src="https://www.oficinadanet.com.br/imagens/post/37687/battlefield-2042-post-capa.jpg"
          img-alt="img"
          text-variant="white"
          title="Battlefield 2042"
          sub-title="EA - 2021"
          sub-title-text-variant="white"
        >
        </b-card>
      </b-col>
    </template>
    <b-modal v-model="addModal.show" title="Adicionar Jogo">
      <b-row>
        <b-col cols="12">
          <b-form @submit="submitAdd">
            <b-form-group label="Nome:" label-for="nome">
              <b-form-input
                id="nome"
                v-model="addModal.nome"
                type="text"
                placeholder="Nome do Jogo"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group label="Empresa:" label-for="empresa">
              <b-form-input
                id="empresa"
                v-model="addModal.empresa"
                type="text"
                placeholder="Empresa desenvolvedora"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group label="URL da Imagem:" label-for="imagem">
              <b-form-input
                id="imagem"
                v-model="addModal.imagem"
                type="text"
                placeholder="https://rugames.com/imagem"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group label="Ano de Publicacao:" label-for="ano">
              <b-form-input
                id="ano"
                v-model="addModal.ano"
                type="number"
                placeholder="2001"
                required
              ></b-form-input>
            </b-form-group>
          </b-form>
        </b-col>
      </b-row>
    </b-modal>
  </b-row>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      addModal: {
        show: false,
        nome: "",
        empresa: "",
        imagem: "",
        ano: "",
      },
    };
  },
  methods: {
    ...mapMutations({
      setGame: "game/setGame",
      addGame: "game/addGame",
    }),

    setGameAndRedirect(game) {
      this.setGame(game);

      this.$router.push("/game");
    },
    submitAdd() {
      this.addGame({
        nome: this.addModal.nome,
        empresa: this.addModal.empresa,
        imagem: this.addModal.imagem,
        ano: this.addModal.ano,
      });
    },
  },
  computed: {
    games() {
      return this.$store.state.game.games;
    },
  },
};
</script>