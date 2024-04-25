export async function dataLoad() {
    try {
        const response = await fetch('./src/json/motogp.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao carregar o arquivo JSON:', error);
    }
}