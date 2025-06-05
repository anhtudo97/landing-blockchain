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

export const getColorFromPositionType = (type: string) => {
  switch (type) {
    case 'Full Time':
      return 'lime';
    case 'Part Time':
      return 'cyan';
    case 'Contract':
      return 'violet';

    default:
      return 'fuchsia';
  }
};

export const getColorFromPositionCategory = (category: string) => {

  switch (category) {
    case 'Engineering':
      return 'lime';
    case 'Product':
      return 'cyan';
    case 'Marketing':
      return 'violet';
    default:
      return 'fuchsia';
  }
};