export function Tr({image, name, plafom, data}) {
  return (
    <tr>
      <td>
        <div>
          <img
            src="https://cdn.akamai.steamstatic.com/steam/apps/1716740/capsule_616x353.jpg?t=1639080161"
            alt=""
          />
          <strong>Starfield</strong>
        </div>
      </td>
      <td>
        <span>XBOX / PC</span>
      </td>
      <td>
        <span>2023</span>
      </td>
      <td>
        <button>Remover</button>
      </td>
    </tr>
  );
}
