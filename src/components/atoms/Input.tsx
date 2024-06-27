interface Props {
  label: string;
  description: string;
  setDescription: any;
}

const Input = ({ label, description, setDescription }: Props) => {
  return (
    <div className='min-w-52 w-2/5 mb-10'>
      <label className='text-white pl-3' htmlFor="name">{label}</label>
      <input
        type="text"
        id='name'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task description"
        className="shadow appearance-none border rounded-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
      />
    </div>
  )
}

export default Input
