# Lista de Compras

Um app android com React Native e Expo para gerenciar uma lista de compras de forma prática e rápida.
Permite adicionar itens, marcar como comprados, remover e limpar toda a lista, com os dados salvos localmente no dispositivo.

# Funcionalidades Principais

- Adicionar Itens: Crie novos itens informando uma descrição.
- Filtrar Itens: Visualize apenas os itens pendentes ou os já comprados.
- Marcar como Comprado: Altere o status de um item com um simples toque.
- Remover Itens: Exclua qualquer item individualmente.
- Limpar Lista: Apague todos os itens salvos de uma só vez.
- Persistência Local: Os dados são armazenados com AsyncStorage, permanecendo disponíveis mesmo após fechar o app.

# Tecnologias e Conceitos Aplicados

- React Native: Framework base para desenvolvimento mobile multiplataforma.
- Expo Framework: Facilita o desenvolvimento, testes e build do aplicativo.
- TypeScript: Tipagem estática para código mais seguro e organizado.
- AsyncStorage: Armazenamento local de dados no dispositivo.
- Hooks do React: Uso de useState e useEffect para controle de estados e ciclos de vida.
- Componentes Nativos: Utilização de FlatList, Alert, TouchableOpacity e TextInput para interface fluida e responsiva.
