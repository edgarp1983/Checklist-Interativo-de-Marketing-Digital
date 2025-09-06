// Aguarda o conteúdo da página ser totalmente carregado para executar o script
document.addEventListener('DOMContentLoaded', () => {

    // =================================================================
    // DADOS DO CHECKLIST
    // =================================================================
    const checklistData = [
        {
            phase: "I. FASE DE PLANEJAMENTO ESTRATÉGICO: A FUNDAÇÃO",
            description: "Esta é a fase mais crítica. O objetivo é substituir suposições por dados concretos para garantir a máxima precisão no investimento.",
            sections: [
                {
                    title: "1.1. Definição de Personas (O Viajante Ideal)",
                    items: [
                        { id: "1.1.1", title: "Diferenciar Público-Alvo de Persona", details: "A distinção entre público-alvo e persona é fundamental. Público-alvo descreve um segmento demográfico amplo (ex: mulheres, 30-45 anos, residentes no Sudeste), enquanto uma persona é a representação semi-fictícia e humanizada do cliente ideal, baseada em dados reais. Para o setor de turismo, compreender as motivações, os sonhos, as preocupações e as dores do viajante é o que permite a criação de ofertas e mensagens que ressoam em um nível emocional profundo." },
                        { id: "1.1.2", title: "Coleta de Dados Iniciais", details: "A investigação deve começar com a base de clientes existente. Analisar dados de CRM, realizar entrevistas com clientes satisfeitos (para entender o que funcionou) e insatisfeitos (para identificar pontos de atrito), e aplicar pesquisas são passos cruciais. Ferramentas como o Instagram Insights e o Google Analytics fornecem dados demográficos e comportamentais valiosos sobre quem já interage com a marca." },
                        { id: "1.1.3", title: "Estruturação do Perfil da Persona", details: "Os dados coletados devem ser organizados em um perfil detalhado que vá além da demografia básica, incluindo: Objetivos de Viagem, Desafios e Dores no Planejamento, Canais de Influência e Informação, e uma Citação Representativa que resuma a principal preocupação da persona." },
                        { id: "1.1.4", title: "Aplicação Estratégica da Persona", details: "Utilizar os insights das personas para formatar e negociar pacotes de viagem específicos (ex: hotéis com recreadores para a persona 'Família'). A persona molda a oferta, e uma oferta perfeitamente alinhada com as necessidades da persona se torna exponencialmente mais fácil de vender." }
                    ]
                },
                {
                    title: "1.2. Análise Competitiva Aprofundada",
                    items: [
                        { id: "1.2.1", title: "Mapeamento de Concorrentes", details: "Listar de 3 a 5 concorrentes diretos relevantes no Ceará, bem como concorrentes indiretos (grandes plataformas online como Booking.com e Airbnb). O objetivo não é imitar, mas identificar tendências, descobrir lacunas e otimizar o próprio posicionamento." },
                        { id: "1.2.2", title: "Investigação na Biblioteca de Anúncios da Meta", details: "Utilizar a Biblioteca de Anúncios da Meta (Facebook Ad Library) para ter uma visão transparente de todos os anúncios que estão sendo veiculados no Facebook e Instagram por cada concorrente, filtrando pelos anúncios ativos." },
                        { id: "1.2.3", title: "Análise Qualitativa por Concorrente", details: "Para cada concorrente, analisar: Ofertas e Posicionamento (o que vendem e como se comunicam), Criativos (estilo visual), Copywriting (tom de voz e argumentos) e Call-to-Action (para onde levam o tráfego). Isso ajuda a identificar os padrões do mercado." },
                        { id: "1.2.4", title: "Estratégia de Diferenciação", details: "Após identificar o 'ruído' do mercado (o que todos estão fazendo), a oportunidade estratégica reside em fazer o oposto deliberadamente. Se todos competem por preço, a diferenciação pode vir da confiança e da especialização." }
                    ]
                },
                // ... (Restante dos dados)
            ]
        },
        // Adicione as outras fases do checklistData aqui...
        {
            phase: "II. FASE DE CRIAÇÃO DE ATIVOS DE ALTA CONVERSÃO",
            description: "O objetivo é traduzir os insights do planejamento em ativos digitais que persuadem o visitante a agir.",
            sections: [
                {
                    title: "2.1. Arquitetura da Landing Page (LP)",
                    items: [
                        { id: "2.1.1", title: "Estratégia de Granularidade", details: "Criar uma Landing Page específica para cada campanha, oferta e persona, evitando páginas genéricas que apresentam múltiplas ofertas. Essa abordagem maximiza a relevância e a taxa de conversão." },
                        { id: "2.1.2", title: "Checklist Estrutural da LP", details: "Garantir que a LP contenha 11 elementos essenciais: Título conectado ao anúncio, Subtítulo com benefício, Imagem/Vídeo de herói, Seção de Dores e Soluções, Lista de Benefícios, Prova Social, CTA Principal acima da dobra, CTA Secundário no final, Design Responsivo, Carregamento rápido (<3s) e Ausência de links de navegação externos." }
                    ]
                }
                // Adicionar outras seções da Fase II...
            ]
        },
        // Adicionar Fases III, IV, V...
    ];


    // =================================================================
    // SELEÇÃO DE ELEMENTOS DO DOM
    // =================================================================
    const container = document.getElementById('checklist-container');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.getElementById('modal-close');
    const progressBar = document.getElementById('progress-bar');
    
    // =================================================================
    // ESTADO DA APLICAÇÃO
    // =================================================================
    // Carrega tarefas concluídas do armazenamento local ou inicia um objeto vazio
    let completedTasks = JSON.parse(localStorage.getItem('completedTasks')) || {};
    let totalTasks = 0;

    // =================================================================
    // FUNÇÕES
    // =================================================================

    /**
     * Alterna o estado de conclusão de uma tarefa, salva e atualiza a UI.
     * @param {string} taskId - O ID da tarefa a ser alternada.
     */
    function toggleTaskCompletion(taskId) {
        completedTasks[taskId] = !completedTasks[taskId];
        localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
        updateUI();
    }
    
    /**
     * Atualiza a interface do usuário (itens do checklist e barra de progresso)
     * com base no estado atual das tarefas concluídas.
     */
    function updateUI() {
        const completedCount = Object.values(completedTasks).filter(Boolean).length;
        
        document.querySelectorAll('.task-item').forEach(taskEl => {
            const taskId = taskEl.dataset.taskId;
            const checkbox = taskEl.querySelector('input[type="checkbox"]');
            
            if (completedTasks[taskId]) {
                taskEl.classList.add('completed');
                taskEl.classList.remove('border-gray-200', 'hover:bg-gray-100');
                checkbox.checked = true;
            } else {
                taskEl.classList.remove('completed');
                taskEl.classList.add('border-gray-200', 'hover:bg-gray-100');
                checkbox.checked = false;
            }
        });

        const progressPercentage = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;
        progressBar.style.width = `${progressPercentage}%`;
        progressBar.textContent = `${progressPercentage}%`;
    }

    /**
     * Cria e renderiza todo o checklist na página.
     */
    function renderChecklist() {
        checklistData.forEach(phase => {
            const phaseElement = document.createElement('div');
            phaseElement.className = 'bg-white rounded-lg shadow-md';
            phaseElement.innerHTML = `
                <div class="p-4 border-b bg-blue-50 rounded-t-lg">
                    <h2 class="text-xl font-bold text-blue-700">${phase.phase}</h2>
                    <p class="text-gray-600 mt-1">${phase.description}</p>
                </div>
            `;

            const sectionsContainer = document.createElement('div');
            sectionsContainer.className = 'p-4 space-y-4';

            phase.sections.forEach(section => {
                const sectionElement = document.createElement('div');
                sectionElement.innerHTML = `<h3 class="text-lg font-semibold text-gray-700 mb-2">${section.title}</h3>`;
                
                const tasksList = document.createElement('div');
                tasksList.className = 'space-y-2';

                section.items.forEach(item => {
                    totalTasks++;
                    const isCompleted = completedTasks[item.id] || false;

                    const taskElement = document.createElement('div');
                    taskElement.className = `task-item flex items-center justify-between p-3 border-l-4 rounded-r-md cursor-pointer transition-colors duration-200 ${isCompleted ? 'completed' : 'border-gray-200 hover:bg-gray-100'}`;
                    taskElement.dataset.taskId = item.id;
                    
                    taskElement.innerHTML = `
                        <div class="flex items-center">
                            <input type="checkbox" class="h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500 pointer-events-none" ${isCompleted ? 'checked' : ''}>
                            <span class="task-title ml-3 text-gray-800">${item.title}</span>
                        </div>
                        <button class="learn-more-btn bg-blue-500 text-white text-xs font-semibold py-1 px-3 rounded-full hover:bg-blue-600 transition-colors">Saiba Mais</button>
                    `;

                    // Evento de clique para marcar/desmarcar
                    taskElement.addEventListener('click', (e) => {
                        if (e.target.tagName.toLowerCase() !== 'button') {
                            toggleTaskCompletion(item.id);
                        }
                    });

                    // Evento de clique para o botão "Saiba Mais"
                    taskElement.querySelector('.learn-more-btn').addEventListener('click', () => {
                        modalTitle.textContent = item.title;
                        modalBody.innerHTML = item.details.replace(/\n/g, '<br>'); // Substitui quebras de linha por <br>
                        modal.classList.remove('hidden');
                    });

                    tasksList.appendChild(taskElement);
                });
                sectionElement.appendChild(tasksList);
                sectionsContainer.appendChild(sectionElement);
            });

            phaseElement.appendChild(sectionsContainer);
            container.appendChild(phaseElement);
        });
    }

    // =================================================================
    // INICIALIZAÇÃO E EVENT LISTENERS GLOBAIS
    // =================================================================
    
    // Funções para fechar o Modal
    modalClose.addEventListener('click', () => modal.classList.add('hidden'));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });

    // Inicia a aplicação
    renderChecklist();
    updateUI();
});