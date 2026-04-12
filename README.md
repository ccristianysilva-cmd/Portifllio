
const projects = [
  {
    id: 1,
    title: "Web Development Portfolio",
    description: "Desenvolvimento responsivo com foco em mobile-first.",
    link: "https://github.com/seu-usuario/web-dev"
  },
  {
    id: 2,
    title: "Big Data Analysis",
    description: "Análise e processamento de dados em larga escala.",
    link: "https://github.com/seu-usuario/big-data"
  },
  {
    id: 3,
    title: "React Components Library",
    description: "Biblioteca de componentes reutilizáveis para interfaces modernas.",
    link: "https://github.com/seu-usuario/react-projects"
  }
];

export default projects;

```
### 2. Componente de Projetos (ProjectSection.jsx)
Este componente cumpre o requisito de renderizar os dados dinamicamente a partir do array.
```jsx
import React from 'react';
import projects from './projects';

const ProjectSection = () => {
  return (
    <section id="projects">
      <h2>Meus Projetos</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;

``` 3. Componente de Cabeçalho (Header.jsx)
O segundo componente solicitado para compor a estrutura básica.
```jsx
import React from 'react';

const Header = () => (
  <header>
    <h1>Estudante de Tecnologia & Developer</h1>
    <nav>
      <ul>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#projects">Projetos</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;

```
### Próximos Passos para a Entrega:
 1. **GitHub:** Suba esses arquivos para um novo repositório público (ex: meu-portfolio-react).
 2. **Vercel:** * Acesse o site da Vercel.
   * Importe o repositório do GitHub que você acabou de criar.
   * Aguarde a publicação automática.
 3. **PDF Final:** Crie o documento incluindo:
   * **Link do GitHub:** https://github.com/[seu-usuario]/[nome-do-repo]
   * **Link da Vercel:** https://[nome-do-projeto].vercel.app
