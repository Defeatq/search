type Props = {
  darkTheme: boolean,
  setDarkTheme: (darkTheme: boolean) => void,
}

function Header({ darkTheme, setDarkTheme }: Props) {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center p-4 pb-0 mb-6 border-b border-gray-300 dark:border-gray-700">
      <div className="flex justify-between items-center w-screen">
        <h1 className="p-1.5 text-xl font-bold bg-sky-500 dark:bg-sky-100 text-gray-100 dark:text-gray-900 rounded">
          Gugl
        </h1>
        <button onClick={ () => setDarkTheme(!darkTheme) } className="p-1 bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 border border-gray-300 rounded-full">
          { darkTheme ? 'Light' : 'Dark' }
        </button>
      </div>
    </div>
  )
}

export default Header;
