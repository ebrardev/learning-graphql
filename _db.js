let games = [
    { id: '1', title: 'The Witcher 3: Wild Hunt', platform: ['PC', 'PS4', 'Xbox'] },
    { id: '2', title: 'Cyberpunk 2077', platform: ['PC', 'PS4', 'PS5', 'Xbox'] },
    { id: '3', title: 'Hades', platform: ['PC', 'Switch'] },
    { id: '4', title: 'Animal Crossing: New Horizons', platform: ['Switch'] },
    { id: '5', title: 'God of War', platform: ['PS4', 'PS5'] },
  ];
  
  let authors = [
    { id: '1', name: 'john_doe', verified: true },
    { id: '2', name: 'jane_smith', verified: false },
    { id: '3', name: 'sam_wilson', verified: true },
  ];
  
  let reviews = [
    { id: '1', rating: 10, content: 'Amazing game!', author_id: '1', game_id: '1' },
    { id: '2', rating: 9, content: 'Great experience.', author_id: '2', game_id: '2' },
    { id: '3', rating: 8, content: 'Very enjoyable.', author_id: '3', game_id: '3' },
    { id: '4', rating: 7, content: 'Good, but could be better.', author_id: '2', game_id: '4' },
    { id: '5', rating: 9, content: 'Fantastic story!', author_id: '1', game_id: '5' },
    { id: '6', rating: 8, content: 'Solid gameplay.', author_id: '3', game_id: '1' },
    { id: '7', rating: 9, content: 'A must-play.', author_id: '2', game_id: '3' },
  ];
  
  export default { games, authors, reviews };
  
