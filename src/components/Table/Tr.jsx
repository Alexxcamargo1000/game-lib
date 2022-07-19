export function Tr({id, image, name, platform, launch}) {

  function remove() {
    fetch(`http://localhost:3001/datas/${id}`, 
    {
      method: 'DELETE' 
    }).then(()=> alert('deletado'))
  }
  function imageErro() {
    alert("imagem invalida tente usar um url valido")
  }

  return (
    <tr>
      <td>
        <div>
          <img
            src={image}
            alt=""
            onError={imageErro}
          />
          <strong>{name}</strong>
        </div>
      </td>
      <td>
        <span>{platform}</span>
      </td>
      <td>
        <span>{launch}</span>
      </td>
      <td>
        <button onClick={remove}>Remover</button>
      </td>
    </tr>
  );
}
