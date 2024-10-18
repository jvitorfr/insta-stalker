<template>
  <div class="container mx-auto max-w-[450px]">
    <Cards :cards="cards" />
    <div class="w-full bg-white d-flex flex-column min-vh-100 flex-1">
      <div class="light d-flex flex-column align-items-center pb-5 px-3">
          <div
              data-state="indeterminate"
              data-max="100"
              class="h-100 w-100 flex-1 bg-danger transition-all"
              style="transform: translateX(0%);"
          ></div>
        </div>
        <h1 class="text-black text-3xl mt-n2 text-center font-weight-bold">
          🔒 Desbloquear Relatório Completo
        </h1>
        <p class="font-nunito text-xl mt-5">Você vai ter acesso à:</p>
        <div class="grid mt-3 gap-2 font-nunito row">
          <div class="col-6">
            <div class="border bg-light text-dark shadow-sm rounded-xl">
              <div class="d-flex flex-column space-y-1.5 p-4 py-3 px-3">
                <h3 class="tracking-tight text-center text-xl font-weight-bold">
                  🔎 Replay dos stories
                </h3>
              </div>
              <div class="p-4 pt-0 text-center px-3 pb-3">
                <p class="text-base font-nunito font-medium">
                  As pessoas que viram e reviram seus stories
                </p>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="border bg-light text-dark shadow-sm rounded-xl">
              <div class="d-flex flex-column space-y-1.5 p-4 py-3 px-3">
                <h3 class="tracking-tight text-center text-xl font-weight-bold">
                  🔎 Rastreio de visitas
                </h3>
              </div>
              <div class="p-4 pt-0 text-center px-3 pb-3">
                <p class="text-base font-nunito font-medium">
                  Saiba quem está entrando no seu perfil
                </p>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="border bg-light text-dark shadow-sm rounded-xl">
              <div class="d-flex flex-column space-y-1.5 p-4 py-3 px-3">
                <h3 class="tracking-tight text-center text-xl font-weight-bold">
                  🔎 Rastreio de menções
                </h3>
              </div>
              <div class="p-4 pt-0 text-center px-3 pb-3">
                <p class="text-base font-nunito font-medium">
                  Saiba quem são os seguidores que mais falam de você
                </p>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="border bg-light text-dark shadow-sm rounded-xl">
              <div class="d-flex flex-column space-y-1.5 p-4 py-3 px-3">
                <h3 class="tracking-tight text-center text-xl font-weight-bold">
                  🔎 Quem fica te olhando
                </h3>
              </div>
              <div class="p-4 pt-0 text-center px-3 pb-3">
                <p class="text-base font-nunito font-medium">
                  Veja quem tirou PRINTS do seu perfil e stories
                </p>
              </div>
            </div>
          </div>
        </div>
        <p class="font-nunito text-xl mt-10 font-weight-bold">E muito mais...</p>
        <p class="font-nunito text-xl mt-7 text-center font-medium">
          Nosso sistema de relatórios é o único sistema verdadeiramente funcional do mercado.
        </p>
        <p class="font-nunito text-xl mt-7 text-center font-medium">
          Poderíamos cobrar o quanto você já gastou em saídas, roupas e jantares que nunca deram em nada.
        </p>
        <p class="font-nunito text-xl mt-10 font-weight-bold text-danger">
          Onde você só se decepcionou.
        </p>
        <div class="divider w-50 h-2 bg-dark rounded-pill mt-4"></div>
        <p class="font-nunito mt-4 text-xl text-center font-medium">Mas não vamos fazer isso,</p>
        <h1 class="text-black text-3xl mt-2 text-center font-nunito font-weight-bold">Queremos que você tenha um alvo</h1>
        <p class="font-nunito text-xl mt-4 text-center font-medium">
          Estamos aqui te entregando a única coisa que ainda falta para você, uma direção.
        </p>
        <p class="font-nunito text-xl mt-4 text-center font-medium">
          Não adianta ficar se humilhando por alguém que não te quer,
          <strong>essa é a sua chance de ter certeza.</strong>
        </p>
        <div class="d-flex align-items-center rounded-pill border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent flex py-2 mt-4 font-nunito px-3 font-normal text-base bg-warning text-warning w-fit">
          Oferta por tempo limitado:&nbsp;<div>12:43</div>
        </div>
        <p class="font-nunito text-xl mt-4 text-center font-medium">
          <strong>⚠️ Não saia dessa página!</strong><br><br>
          Só permitimos ver a<br>prévia <strong>UMA VEZ</strong>
        </p>
        <div class="border bg-light text-dark shadow-sm rounded-xl d-flex justify-content-between w-100 flex-start px-3 mt-4 py-3">
          <div>
            <div class="d-flex flex-column">
              <span class="text-2xl mr-2 font-nunito">🔓</span>
              <h3 class="text-black mt-1 text-2xl text-center font-nunito font-weight-bold">Relatório<br>Completo</h3>
            </div>
          </div>
          <div class="d-flex flex-column align-items-end">
            <div class="d-inline-flex align-items-center rounded-pill border px-2 py-0 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mb-3">
              PROMOÇÃO 60% off
            </div>
            <small class="text-right text-base font-nunito font-semibold text-muted">de R$ 56 por:</small>
            <h2 class="text-black text-right text-4xl mt-1 font-nunito font-weight-bold">R$ 18<small class="text-[18px]">,90</small></h2>
            <small class="text-right font-nunito text-base font-semibold text-muted">à vista</small>
          </div>
        </div>
        <div class="grid mt-2 gap-2 font-nunito row">
          <div class="col-6">
            <div class="border bg-light text-dark shadow-sm rounded-xl">
              <div class="d-flex flex-column space-y-1.5 p-4 py-3 pb-2 px-3">
                <h3 class="tracking-tight text-center text-xl font-weight-bold">Acesso vitalício</h3>
              </div>
              <div class="p-4 pt-0 text-center px-3 pb-3">
                <p class="text-base font-nunito font-medium">Sem mensalidades, pagamento único</p>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="border bg-light text-dark shadow-sm rounded-xl">
              <div class="d-flex flex-column space-y-1.5 p-4 py-3 pb-2 px-3">
                <h3 class="tracking-tight text-center text-xl font-weight-bold">+ Bônus</h3>
              </div>
              <div class="p-4 pt-0 text-center px-3 pb-3">
                <p class="text-base font-nunito font-medium">Ebook: Manual da conquista e reconquista</p>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4 w-100">
          <a
              class="d-flex align-items-center justify-content-center text-white bg-danger rounded-2xl h-12 w-full transition duration-300 hover:bg-danger focus:outline-none focus:ring-2 focus:ring-offset-2"
              href="#"
              role="button"
          >Adquirir agora</a
          >
        </div>
        <p class="font-nunito mt-4 text-xl text-center font-medium">
          Você será redirecionado para nosso site de pagamento seguro
        </p>
      </div>
    </div>
</template>

<script>
import Cards from "./Cards.vue";

export default {

  name: "PreCheckout",
  components:{
    Cards
  },
  setup() {
    const cards = [
      {
        title: "🔎 Replay dos stories",
        description: "As pessoas que viram e reviram seus stories"
      },
      {
        title: "🔎 Rastreio de visitas",
        description: "Saiba quem está entrando no seu perfil"
      },
      {
        title: "🔎 Rastreio de menções",
        description: "Saiba quem são os seguidores que mais falam de você"
      },
      {
        title: "🔎 Quem fica te olhando",
        description: "Veja quem tirou PRINTS do seu perfil e stories"
      }
    ];
    return { cards };
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
