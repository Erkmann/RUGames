<template>
  <b-row class="text-center mb-4">
    <b-col cols="12" class="mb-4">
      <h1 class="h1 font-mosaic font-xl"><b-icon icon="joystick" /> RUGames</h1>
    </b-col>
    <b-col cols="12" md="4" class="text-left cursor-pointer">
      <b-card
        class="my-3"
        @click="setGameAndRedirect(
          'Battlefield 2042',
          'EA',
          '2021',
          'https://www.oficinadanet.com.br/imagens/post/37687/battlefield-2042-post-capa.jpg'
        )"
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
    <b-col cols="12" md="4" class="text-left cursor-pointer">
      <b-card
        class="my-3"
        @click="$router.push('/game/')"
        overlay
        img-src="https://gametimes.com.br/wp-content/uploads/2021/03/rainbow-six-siege-year-6-key-art.jpg"
        img-alt="img"
        text-variant="white"
        title="Rainbow Six Siege"
        sub-title="Ubisoft - 2016"
        sub-title-text-variant="white"
      >
      </b-card>
    </b-col>    <b-col cols="12" md="4" class="text-left cursor-pointer">
      <b-card
        class="my-3"
        @click="$router.push('/game/battlefield')"
        overlay
        img-src="https://www.oficinadanet.com.br/imagens/post/37687/battlefield-2042-post-capa.jpg"
        img-alt="img"
        text-variant="white"
        title="Battlefield 2042"
        sub-title="EA - 2021"
        sub-title-text-variant="white"
      >
      </b-card>
    </b-col>    <b-col cols="12" md="4" class="text-left cursor-pointer">
      <b-card
        class="my-3"
        @click="$router.push('/game/battlefield')"
        overlay
        img-src="https://www.oficinadanet.com.br/imagens/post/37687/battlefield-2042-post-capa.jpg"
        img-alt="img"
        text-variant="white"
        title="Battlefield 2042"
        sub-title="EA - 2021"
        sub-title-text-variant="white"
      >
      </b-card>
    </b-col>    <b-col cols="12" md="4" class="text-left cursor-pointer">
      <b-card
        class="my-3"
        @click="$router.push('/game/battlefield')"
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
  </b-row>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      setGame: 'game/setGame'
    }),

    setGameAndRedirect(
      nome,
      empresa,
      ano,
      imagem
    ) {
      this.setGame({
        nome: nome,
        empresa: empresa,
        imagem: imagem,
        ano: ano
      })

      this.$router.push('/game')
    }
  }
};
</script>