import * as Icon from './icons'

export function Banner() {
  return (
    <div className="gradient-primary bg-gradient-to-r py-3 text-center">
      <div className="container flex items-center justify-center">
        <p className="flex gap-2 font-medium">
          <span className="hidden sm:inline">
            This project was created by     <a
            href="https://linkedin.com/in/iamqitmeer"
            target="_blank"
            rel="noopener noreferrer"
          >Qitmeer Raza.</a>
          </span>
          <a
            href="https://github.com/iamqitmeer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 underline underline-offset-4"
          >
            View my GitHub Profile
            <span>
              <Icon.ArrowRight />
            </span>
          </a>
        </p>
      </div>
    </div>
  )
}
