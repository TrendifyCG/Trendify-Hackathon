function StreamingContainer() {
  return (
    <div className="streaming flex flex-col">
      <div className="flex justify-end">
        <button className="copy-all bg-primary-themeSecondary p-2 hover:bg-primary-themePrimary rounded-lg text-white flex items-center font-bold CSS false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-5 w-5 mr-1"
          >
            <path d="M16 4.038V4c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C14.697 2 14.464 2 14 2h-4c-.465 0-.697 0-.888.051a1.5 1.5 0 0 0-1.06 1.06C8 3.304 8 3.536 8 4v.038m8 0c0 .44-.001.665-.051.85a1.5 1.5 0 0 1-1.06 1.06C14.697 6 14.464 6 14 6h-4c-.465 0-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C8.001 4.702 8 4.477 8 4.038m8 0c.784.047 1.34.155 1.816.397a4 4 0 0 1 1.748 1.748C20 7.04 20 8.16 20 10.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C16.96 22 15.84 22 13.6 22h-3.2c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C4 18.96 4 17.84 4 15.6v-5.2c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748c.475-.242 1.032-.35 1.816-.398"></path>
          </svg>
          <span className="copy-all__text">Copy</span>
        </button>
      </div>
      <div className="card-info h-auto p-4 flex-grow">
        <p className="title">
          Originally called the “Entrepreneur track” … this track’s purpose is
          to test-drive the entrepreneur spirit that many CS majors
        </p>
      </div>
    </div>
  );
}

export default StreamingContainer;
