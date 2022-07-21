import { useEffect } from "react";

export function Tr({image, name, platform, launch, ...rest}) {



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
        <button {...rest}>Remover</button>
      </td>
    </tr>
  );
}
