import React from 'react'

interface ButtonProps {
  title: string;
  onPress?: (event?: React.FormEvent<Element>) => void;
}

const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <button
      type="submit"
      onClick={onPress}
      className="bg-blue-500 min-w-52 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-2/5 h-16 mb-10 shadow-md shadow-slate-700"
    >
      {title}
    </button>
  )
}

export default Button

