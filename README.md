# 🧠 NeuroFlux

**NeuroFlux** é uma plataforma de organização pessoal e foco pensada especialmente para estudantes neurodivergentes, como pessoas com TDAH, que enfrentam desafios na manutenção de rotinas, organização de tarefas e gestão de energia mental.

Este projeto foi desenvolvido como um sistema completo, com frontend em **React** e backend em **Node.js**, com banco de dados em **MongoDB**, e tem como objetivo auxiliar no desenvolvimento de hábitos mais sustentáveis, sem recorrer a métodos genéricos e pouco empáticos.

---

## ✨ Motivação

Estudar engenharia de software já é desafiador. Agora, some a isso as dificuldades comuns do TDAH: foco fragmentado, procrastinação, sobrecarga mental, e uma avalanche de tarefas simultâneas.

O NeuroFlux nasce da necessidade de lidar com essa realidade de forma estruturada, mas flexível. Ao invés de impor um ritmo rígido, o sistema adapta-se ao seu dia e respeita seus limites, oferecendo:

- Divisão de tarefas em blocos de foco curtos;
- Registro de energia mental e emocional diário;
- Recomendações com base no seu estado atual;
- Recompensas e pontos de progresso para manter o engajamento.

---

## ⚙️ Tecnologias Utilizadas

### Frontend
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)

### Backend
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)
- [JSON Web Tokens](https://jwt.io/) para autenticação
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js) para hashing de senhas
- [dotenv](https://github.com/motdotla/dotenv) para variáveis de ambiente

### Hospedagem
- Frontend: [Vercel](https://vercel.com/)
- Backend: [Railway](https://railway.app/) ou [Render](https://render.com/)
- Banco de Dados: [MongoDB Atlas](https://www.mongodb.com/atlas)

---

## 🧠 Funcionalidades Principais (MVP)

- ✅ Cadastro e login com autenticação via JWT
- ✅ Criação e visualização de tarefas
- ✅ Quebra de tarefas em blocos de foco (25min)
- ✅ Timer com controle de pausa e reinício
- ✅ Check-in emocional e mental diário
- ✅ Pontuação e recompensas simples por progresso
- ✅ Histórico diário com visão de desempenho

---

## 💡 Regras de Negócio

- Tarefas longas são quebradas em blocos focais para evitar sobrecarga.
- O sistema sugere limites de esforço com base no estado emocional do dia.
- Blocos completados geram pontos, que podem ser usados em "recompensas pessoais".
- Tarefas âncoras ajudam a manter uma rotina mínima mesmo em dias difíceis.
- Nenhuma tarefa é penalizada por não ser concluída — a prioridade é o bem-estar.

---

## 📦 Instalação Local

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/neuroflux.git
