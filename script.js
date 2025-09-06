// Aguarda o conteúdo da página ser totalmente carregado para executar o script
document.addEventListener('DOMContentLoaded', () => {

    // =================================================================
    // DADOS COMPLETOS DO CHECKLIST
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
                {
                    title: "1.3. Mapeamento de Palavras-Chave de Cauda Longa",
                    items: [
                        { id: "1.3.1", title: "Entender o Conceito de Cauda Longa", details: "Palavras-chave de cauda longa são termos de busca com três ou mais palavras. Elas têm um volume de busca menor, mas uma taxa de conversão drasticamente superior porque a especificidade revela uma forte intenção de compra." },
                        { id: "1.3.2", title: "Geração de Palavras-Chave", details: "Derivar listas de palavras-chave diretamente das dores e objetivos de cada persona. Utilizar ferramentas como o Planejador de Palavras-chave do Google, o autocompletar da busca do Google e plataformas como Semrush para expandir a lista e validar volumes." },
                        { id: "1.3.3", title: "Aplicação Consistente", details: "A palavra-chave de cauda longa deve ser usada em toda a jornada do cliente: no título do anúncio, na headline da Landing Page e na mensagem de saudação do WhatsApp. Essa consistência aumenta drasticamente a confiança e a conversão." }
                    ]
                }
            ]
        },
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
                },
                {
                    title: "2.2. Aplicação Estratégica de Gatilhos Mentais",
                    items: [
                        { id: "2.2.1", title: "Prova Social (Implementação Ética)", details: "Utilizar depoimentos específicos que contam uma mini-história, números concretos ('Mais de 300 famílias viajaram conosco') e, o mais poderoso, vídeos de clientes reais (UGC - User-Generated Content)." },
                        { id: "2.2.2", title: "Urgência e Escassez (Implementação Crível)", details: "Motivar a ação imediata criando a percepção de que a oportunidade pode ser perdida. Urgência baseada em tempo (ex: bônus válido por 48h) e escassez baseada em quantidade (ex: 'apenas 2 quartos disponíveis'). Os gatilhos devem ser genuínos para não destruir a confiança." }
                    ]
                },
                {
                    title: "2.3. Otimização do Call-to-Action (CTA) para WhatsApp",
                    items: [
                        { id: "2.3.1", title: "Texto, Design e Posicionamento do CTA", details: "O texto deve ser orientado à ação e ao benefício (ex: 'Quero um Roteiro Personalizado Grátis'). O design deve ter cor de destaque e o ícone do WhatsApp. O CTA principal deve estar acima da dobra e ser repetido ao longo da página." },
                        { id: "2.3.2", title: "Microcopy de Suporte", details: "Adicionar um pequeno texto abaixo do botão para quebrar objeções e reduzir a ansiedade do clique. Exemplos: 'Resposta em até 5 minutos', 'Conversa sem compromisso'." }
                    ]
                },
                {
                    title: "2.4. Produção de Criativos em Vídeo",
                    items: [
                        { id: "2.4.1", title: "Estratégia de Funil para Vídeos", details: "No Topo de Funil (Reels/TikTok), o objetivo é inspiração e alcance, com dicas rápidas e bastidores. No Fundo de Funil (Anúncios), o objetivo é conversão, usando vídeos de prova social e depoimentos de clientes (UGC)." },
                        { id: "2.4.2", title: "Sistema de Coleta de UGC", details: "Coletar conteúdo gerado pelo usuário (UGC) criando uma hashtag de marca, promovendo concursos ou solicitando ativamente aos clientes satisfeitos que compartilhem seus registros em troca de um benefício." },
                        { id: "2.4.3", title: "Estratégia de Impulsionamento em 2 Etapas", details: "Primeiro, impulsionar vídeos de topo de funil para criar uma audiência qualificada (pessoas que assistiram a 50%+ do vídeo). Segundo, direcionar os anúncios de conversão para essa audiência aquecida, reduzindo o Custo por Lead." }
                    ]
                }
            ]
        },
        {
            phase: "III. FASE DE RASTREAMENTO E MENSURAÇÃO DE RESULTADOS",
            description: "Esta fase técnica garante que as decisões sejam baseadas em dados completos e precisos, permitindo a otimização real do ROI.",
            sections: [
                {
                    title: "3.1. Implementação do Rastreamento Server-Side",
                    items: [
                        { id: "3.1.1", title: "Implementar a API de Conversões (CAPI) da Meta", details: "O rastreamento tradicional via Pixel (client-side) é falho. A API de Conversões (server-side) estabelece um canal de comunicação direto e mais confiável entre o servidor do seu site e o da Meta, garantindo a coleta de dados mais completa." },
                        { id: "3.1.2", title: "Configurar via Google Tag Manager (GTM)", details: "A implementação mais robusta é via GTM, usando um contêiner Web e um Server-Side. O fluxo: o contêiner Web captura os eventos, envia para o contêiner do Servidor, que por sua vez os retransmite para a Meta via CAPI." },
                        { id: "3.1.3", title: "Configurar Deduplicação de Eventos", details: "É crucial garantir que o mesmo evento não seja contado duas vezes (pelo Pixel e pela CAPI). Isso é feito enviando um parâmetro de evento idêntico (event_id) por ambos os canais, permitindo que a Meta deduplique automaticamente." }
                    ]
                },
                {
                    title: "3.2. Rastreamento de Conversões Offline (Vendas no WhatsApp)",
                    items: [
                        { id: "3.2.1", title: "Capturar Identificadores de Clique", details: "Configurar a Landing Page para capturar os parâmetros de URL `gclid` (Google) e `fbclid` (Meta) quando um usuário clica em um anúncio. Esses IDs são essenciais para conectar o clique à venda." },
                        { id: "3.2.2", title: "Criar um Registro Centralizado de Leads", details: "Manter um CRM ou uma planilha simples com os dados de cada lead, incluindo os identificadores de clique (gclid/fbclid), status da venda e valor da venda." },
                        { id: "3.2.3", title: "Importar os Dados de Venda", details: "Periodicamente (a cada 1-2 dias), exportar a lista de vendas concluídas (com seus respectivos gclid/fbclid, valor e data) e fazer o upload para as plataformas de anúncios (Google e Meta). Isso 'ensina' o algoritmo a buscar pessoas que compram, não apenas que clicam." }
                    ]
                }
            ]
        },
        {
            phase: "IV. FASE DE ESTRUTURAÇÃO E OTIMIZAÇÃO DE CAMPANHAS",
            description: "Organizar as campanhas de forma lógica para testar, otimizar e escalar os resultados.",
            sections: [
                {
                    title: "4.1. Segmentação de Públicos de Alta Performance (Meta Ads)",
                    items: [
                        { id: "4.1.1", title: "Públicos Frios (Interesse e Comportamento)", details: "Para alcançar novos clientes, use a segmentação por comportamentos de viagem (ex: 'viajantes frequentes') e interesses (ex: 'Jericoacoara', 'Kitesurf'). Use a estratégia de camadas (layering) para refinar a audiência combinando múltiplos critérios." },
                        { id: "4.1.2", title: "Públicos Semelhantes (Lookalikes - LAL)", details: "A ferramenta de prospecção mais poderosa. Forneça à Meta uma lista de seus melhores clientes e ela encontrará novas pessoas com perfis semelhantes. A qualidade da fonte é tudo: um LAL de compradores é o 'padrão ouro'." }
                    ]
                },
                {
                    title: "4.2. Estratégias de Remarketing (Público Quente)",
                    items: [
                        { id: "4.2.1", title: "Criar Segmentos de Remarketing Essenciais", details: "Exiba anúncios para pessoas que já interagiram com sua marca. Segmentos cruciais: Visitantes da LP que não converteram, Visualizadores de 50%+ dos seus vídeos e Pessoas que se engajaram com seus perfis sociais." },
                        { id: "4.2.2", title: "Estruturar Exclusões", details: "Em cada público, exclua usuários que já avançaram no funil para não desperdiçar verba. Por exemplo, no público de remarketing para visitantes da LP, exclua quem já comprou." }
                    ]
                },
                {
                    title: "4.3. Estrutura de Campanha Recomendada (Fase Inicial)",
                    items: [
                        { id: "4.3.1", title: "Campanha 1: Prospecção (CBO)", details: "Use o Orçamento de Campanha Advantage+ (CBO) para permitir que a Meta aloque a verba automaticamente para o melhor conjunto de anúncios. Teste seus melhores públicos (ex: LAL 1% de Compradores vs. Interesses em Camadas) e de 3 a 5 criativos diferentes em cada." },
                        { id: "4.3.2", title: "Campanha 2: Remarketing", details: "Crie uma campanha separada com um orçamento menor para seus públicos de remarketing. Use criativos focados em prova social e urgência para convencer quem já demonstrou interesse." }
                    ]
                }
            ]
        },
        {
            phase: "V. CONCLUSÃO E PRÓXIMOS PASSOS",
            description: "O sucesso sustentável é resultado de um sistema integrado. A execução consistente de todo o processo é o que separa as agências que lutam por clientes daquelas que constroem um fluxo previsível de vendas.",
            sections: [
                {
                    title: "5.1. Adoção de uma Cultura de Testes",
                    items: [
                        { id: "5.1.1", title: "Adotar uma Cultura de Testes", details: "O próximo nível de performance será alcançado através de uma cultura de testes contínuos: testar novos criativos, otimizar o texto da Landing Page, experimentar novos segmentos de público e refinar as ofertas." }
                    ]
                },
                 {
                    title: "5.2. Foco no Ativo Mais Valioso",
                    items: [
                        { id: "5.2.1", title: "Focar no Ativo Mais Valioso", details: "É imperativo reconhecer que o ativo mais valioso que uma agência construirá com esta estratégia não são os leads individuais, mas sim os dados agregados. Uma lista de clientes robusta e dados de conversão offline precisos são o combustível para escalar as campanhas de forma previsível e lucrativa no futuro." }
                    ]
                }
            ]
        }
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
                        modalBody.innerHTML = item.details.replace(/\n/g, '<br>');
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
