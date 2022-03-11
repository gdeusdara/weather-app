const formatNumber = (number) => new Intl.NumberFormat('pt-BR', { minimumIntegerDigits: 2 }).format(number)

export default formatNumber;
