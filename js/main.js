const dado_cep = document.querySelector('#cep')
const dado_numero = document.querySelector('#number')
const dado_rua = document.querySelector('#street')
const dado_bairro = document.querySelector('#neighborhood')
const dado_estado = document.querySelector('#state')
const dado_cidade = document.querySelector('#city')

async function encontrar_cep(cep) {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    return await resposta.json()
}

dado_cep.onchange = async () => {
    const cep = dado_cep.value;

    
    
    const { logradouro } = await encontrar_cep(cep);
    dado_rua.value = logradouro

    const { bairro } = await encontrar_cep(cep);
    dado_bairro.value = bairro

    const { estado } = await encontrar_cep(cep);
    dado_estado.value = estado

    const { localidade } = await encontrar_cep(cep);
    dado_cidade.value = localidade
}
