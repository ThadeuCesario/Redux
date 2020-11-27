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