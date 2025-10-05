document.addEventListener('DOMContentLoaded', getVerseAndLesson);

const newVerseBtn = document.getElementById('new-verse-btn');
const verseTextElem = document.querySelector('.verse-text');
const verseRefElem = document.querySelector('.verse-reference');
const lessonTextElem = document.getElementById('lesson-text');
const btnText = document.querySelector('.btn-text');
const loader = document.querySelector('.loader');

newVerseBtn.addEventListener('click', getVerseAndLesson);

function getVerseAndLesson() {
    setLoadingState(true);
    fetch('https://www.abibliadigital.com.br/api/verses/nvi/random')
        .then(response => response.json())
        .then(data => {
            displayVerse(data);
            generateLesson(data);
            setLoadingState(false);
        })
        .catch(error => {
            console.error('Erro ao buscar versículo:', error);
            verseTextElem.textContent = 'Não foi possível carregar o versículo. Tente novamente.';
            verseRefElem.textContent = '';
            lessonTextElem.textContent = '';
            setLoadingState(false);
        });
}

function displayVerse(verseData) {
    verseTextElem.textContent = `"${verseData.text}"`;
    verseRefElem.textContent = `${verseData.book.name} ${verseData.chapter}:${verseData.verse}`;
}

function generateLesson(verseData) {
    const lessons = [
        `Este versículo nos lembra da importância de confiar em Deus em todos os momentos. A nossa fé é o alicerce que nos sustenta nas adversidades, e é através dela que encontramos força para continuar. Que possamos refletir sobre como aplicar essa confiança em nossas vidas diárias.`,
        `Aqui, a Palavra nos ensina sobre o amor incondicional. Esse amor deve ser a base de nossos relacionamentos, guiando nossas ações e palavras. Praticar o amor ao próximo é um reflexo do amor de Deus por nós. Pense em uma atitude de amor que você pode ter hoje.`,
        `A sabedoria que vem do alto é um presente valioso. Este versículo nos incentiva a buscar o entendimento que vai além do conhecimento humano. Com sabedoria divina, podemos tomar decisões mais justas e viver uma vida que honra a Deus.`,
        `A esperança é uma âncora para a alma. Mesmo em meio às tempestades da vida, a esperança em Deus nos mantém firmes. Que esta passagem renove suas esperanças e te dê a certeza de que dias melhores virão sob a graça do Senhor.`,
        `O perdão é uma chave que liberta tanto quem perdoa quanto quem é perdoado. Esta passagem nos desafia a perdoar assim como fomos perdoados por Deus. Reflita se há algum ressentimento em seu coração que precisa ser liberado através do perdão.`
    ];

    const randomIndex = Math.floor(Math.random() * lessons.length);
    lessonTextElem.textContent = lessons[randomIndex];
}

function setLoadingState(isLoading) {
    if (isLoading) {
        btnText.style.display = 'none';
        loader.style.display = 'block';
        newVerseBtn.disabled = true;
    } else {
        btnText.style.display = 'block';
        loader.style.display = 'none';
        newVerseBtn.disabled = false;
    }
}