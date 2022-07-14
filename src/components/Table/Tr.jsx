export function Tr({image, name, platform, launch}) {
  return (
    <tr>
      <td>
        <div>
          <img
            src={image}
            alt=""
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
        <button>Remover</button>
      </td>
    </tr>
  );
}
