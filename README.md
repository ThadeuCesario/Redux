<h1>Redux</h1>
<hr />
<h2>Arquitetura flux</h2>
<p>
É uma forma de organizarmos as alterações em estados globais em nossa aplicação.<br/>
<strong>Estados globais</strong>, são estados que são compartilhados entre vários componentes de nossa aplicação.
</p>
<br/><br/>
<h2>Actions</h2>
<p>
No redux trabalhamos com <code>Actions</code>.
Cada actions define uma determinada ação que irá interagir diretamente com o estado global do redux.
<br/>
Geralmente colocamos um nome bem descritivo. 
<br/><br/>
<em>Exemplo:</em>
<br/>
<strong>ADD_PRODUCT_TO_CART</strong>
<br/><br/>
Com a <code>Action</code> criada, podemos coletar informações como: 
<br/>
<ul>
  <li>ID do produto adicionado ao carrinho</li>
  <li>Quantidade sendo adicionada</li> 
</ul>
E com essa informações, vamos enviar para o <code>Reducer</code>.
</p>

<h2>Reducer</h2>
<p>
  Os dados coletados pelas <strong>actions</strong>, são enviados para o <strong>reducer</strong>.
  <br /><br />
  No <code>Reducer</code> é onde encontramos nosso estado global. Então, basicamente o <code>reducer</code> escutará as <code>Actions</code> e mudará o estado necessário.
</p>
<br /><br />
<strong>
As ações no Redux são unidirecionais. Isso quer dizer que não conseguimos colocar um <code>await</code>, na <code>Action</code> para aguardar o processo finalizar. 
<br/><br/>
Mas então como sei quando a informação foi atualizada? <br/><br/>
Bem simples! Vamos utilizar <code>connect</code>. Isso, basicamente vamos estabelecer uma conexão com o componente que queremos e o Redux. <br/>
Dessa forma, assim que o estado for atualizado o componente será automaticamente recarregado.  :) 
</strong>
<br/><br/>
<h2>Middlewares</h2>
<p>
Middlewares são interceptadores das <code>Actions</code>, para que possamos realizar uma ação externa.
Após essa ação externa finalizar (por exemplo, checar o estoque) é passado para o <strong>Reducer</strong>.
<br/>
<strong>Nesse momento que trabalhamos com os middlewares, entramos com o Redux Saga.</strong>
</p>