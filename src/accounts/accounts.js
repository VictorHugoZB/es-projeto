const accounts = {
  specialists: [
    {
      nome: 'Ana',
      email: 'ana@ana.com',
      senha: 'ana',
      celular: '953951258',
      genero: 'F',
      dataNasci: '1995-02-25',
      localizacao: 'Santo André, SP',
      preco: '100',
      descricao: 'Ctor eu ac metus. Nunc eros ante, tincidunt sed rhoncus et, maximus a libero. Suspendisse lobortis vulputate lorem, nec feugiat dolor iaculis eu. Morbi rhoncus',
    },
    {
      nome: 'Julia',
      email: 'julia@julia.com',
      senha: 'julia',
      celular: '945197685',
      genero: 'F',
      dataNasci: '1991-05-19',
      localizacao: 'Santo Andre, SP',
      preco: '100 - 150',
      descricao: 'Ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut libero ac eros placerat pulvinar et et lorem. Fusce vitae nisl ut lorem pulvinar auctor eu ac metus. Nunc eros ante, tincidunt sed rhoncus et, maximus a libero. Suspendisse lobortis vulputate lorem, nec feugiat dolor iaculis eu. Morbi rhoncus sed orci sed tincidunt. Vivamus id ultrices lectus. Sed metus nunc, consectetur a augue a, ultrices placerat eros. Nam facilisis id magna a fermentum. Maecenas sit amet mi at dui tempor auctor vitae a est. Duis eleifend sagittis turpis. Integer nisi ex, interdum sed sem in, molestie volutpat metus. Maecenas tellus eros, facilisis tincidunt lectus ac, congue vestibulum turpis. Fusce vulputate eleifend sem',
    },
    {
      nome: 'Eduardo',
      email: 'eduardo@eduardo.com',
      senha: 'eduardo',
      celular: '965581345',
      genero: 'M',
      dataNasci: '1996-10-14',
      localizacao: 'São Bernardo do Campo, SP',
      preco: '180',
      descricao: 'Amet hendrerit nulla. Curabitur sed massa in nibh dignissim malesuada. Sed fermentum massa sit amet efficitur rutrum. Etiam elementum metus non nibh congue efficitur eget',
    },
    {
      nome: 'Felipe',
      email: 'felipe@felipe.com',
      senha: 'felipe',
      celular: '991145689',
      genero: 'O',
      dataNasci: '1989-07-02',
      localizacao: 'São Caetano do Sul, SP',
      preco: '130',
      descricao: 'Phasellus vitae pulvinar elit. Maecenas viverra tortor nec justo tempus lobortis. Nunc efficitur, diam ac sollicitudin dictum, augue libero pretium eros',
    },
    {
      nome: 'Barbara',
      email: 'barbara@barbara.com',
      senha: 'barbara',
      celular: '999784546',
      genero: 'F',
      dataNasci: '1995-09-01',
      localizacao: 'Diadema, SP',
      preco: '110',
      descricao: 'Curabitur sed massa in nibh dignissim malesuada. Sed fermentum massa sit amet efficitur rutrum.',
    },
  ],
  users: [
    {
      nome: 'João',
      email: 'joao@joao.com',
      senha: 'joao',
      celular: '923456789',
    },
    {
      nome: 'Victor',
      email: 'victor@victor.com',
      senha: 'victor',
      celular: '987654321',
    },
    {
      nome: 'Matheus',
      email: 'matheus@matheus.com',
      senha: 'matheus',
      celular: '941852963',
    },
    {
      nome: 'Juliana',
      email: 'juliana@juliana.com',
      senha: 'juliana',
      celular: '963852741',
    },
    {
      nome: 'João',
      email: 'joao@joao.com',
      senha: 'joao',
      celular: '923456789',
    },
  ],
  adms: [{
    name: 'Victor Adm',
    email: 'adm@adm.com',
    senha: 'admpassword',
  }],
};

const getAccountData = (email, role) => {
  switch (role) {
    case 'specialist':
      return accounts.specialists.filter((s) => s.email === email)[0];
    case 'user':
      return accounts.users.filter((u) => u.email === email)[0];
    case 'adm':
      return accounts.adms[0];
    default: return null;
  }
};

const login = (user, pass) => {
  const filteredUsers = accounts.users.filter((u) => u.nome === user && u.senha === pass);
  if (filteredUsers.length) return 'user';

  const filteredSpecialists = accounts.specialists
    .filter((u) => u.nome === user && u.senha === pass);
  if (filteredSpecialists.length) return 'specialist';

  if (accounts.adms[0].nome === user && accounts.adms[0].senha === pass) return 'adm';

  return null;
};

export default accounts;
export { getAccountData, login };
