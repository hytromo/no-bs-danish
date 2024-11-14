interface Props {
  original: string;
  translation?: string;
  example?: string;
  image?: string;
}

export default function Card(props: Props) {
  let example = props.example;
  let pronunciation = '';

  if (props.example) {
    pronunciation = props.example.split(' - ')[1]
    example = props.example.split(' - ')[0]
  }

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="p-10">
        <img
          src={props.image || 'https://images.unsplash.com/photo-1484069560501-87d72b0c3669?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.original}</h2>
        <h3 className="card-subtitle text-orange-500">{props.translation || ""}</h3>
        <p className="italic">{example && `${example} - `} <span className="font-bold">{pronunciation}</span>  </p>
      </div>
    </div>
  )
}
