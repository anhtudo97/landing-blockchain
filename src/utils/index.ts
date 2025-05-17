export const getPostColorFromCategory = (category: string) => {
  const colors = [
    'bg-red-500',
    'bg-green-500',
    'bg-blue-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-gray-500',
    'bg-orange-500',
  ];
  switch (category) {
    case 'Sustainability':
      return 'lime';
    case 'Innovation':
      return 'cyan';
    case 'Security':
      return 'violet';
    default:
      return 'fuchsia';
  }
};
