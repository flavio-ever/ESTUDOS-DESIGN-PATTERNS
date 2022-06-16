const maskCPF = (value: string) => {
  return value
    .replace(/\D/g, '')

    .replace(/(\d{3})(\d)/, '$1.$2')

    .replace(/(\d{3})(\d)/, '$1.$2')

    .replace(/(\d{3})(\d{1,2})/, '$1-$2')

    .replace(/(\d{2})\d+?$/, '$1');
};

console.log(maskCPF('44192850877'));

const regex = new RegExp('dog', 'gi');
console.log(regex);
