import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-7 lg:col-span-12">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Cruip">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                zoomAndPan="magnify"
                viewBox="0 0 375 374.999991"
                height="150"
                preserveAspectRatio="xMidYMid meet"
                version="1.0"
              >
                <defs>
                  <clipPath id="47d6e515ad">
                    <path
                      d="M 136.167969 97.980469 L 238.917969 97.980469 L 238.917969 210.480469 L 136.167969 210.480469 Z M 136.167969 97.980469 "
                      clipRule="nonzero"
                    />
                  </clipPath>
                  <clipPath id="ed596e9058">
                    <path
                      d="M 167.816406 130.113281 L 206.816406 130.113281 L 206.816406 169.113281 L 167.816406 169.113281 Z M 167.816406 130.113281 "
                      clipRule="nonzero"
                    />
                  </clipPath>
                </defs>
                <g clipPath="url(#47d6e515ad)">
                  <path
                    fill="#ffde59"
                    d="M 145.5625 124.339844 C 155.613281 116.476562 164.902344 112.105469 177.304688 108.734375 C 187.039062 106.082031 187.953125 106.082031 197.6875 108.734375 C 210.089844 112.105469 219.378906 116.476562 229.429688 124.339844 C 231.144531 128.140625 229.210938 141.054688 228.421875 145.269531 C 226.835938 153.722656 223.910156 162.03125 219.78125 169.667969 L 226.195312 176.082031 C 231.414062 167.046875 235.085938 157.082031 237 146.878906 C 239.164062 135.34375 240.25 121.769531 235.28125 117.839844 C 224.320312 109.171875 214.175781 104.171875 199.980469 100.3125 C 188.558594 97.207031 186.433594 97.207031 175.011719 100.3125 C 160.816406 104.171875 150.671875 109.171875 139.710938 117.839844 C 134.742188 121.769531 135.832031 135.34375 137.992188 146.878906 C 143.132812 174.296875 160.957031 200.023438 187.496094 210.46875 C 198.558594 206.117188 208.105469 199.105469 215.851562 190.421875 L 209.671875 184.242188 C 203.511719 191.242188 196.058594 197.042969 187.496094 200.988281 C 165.582031 190.898438 150.953125 168.632812 146.570312 145.269531 C 145.78125 141.054688 143.847656 128.140625 145.5625 124.339844 Z M 145.5625 124.339844 "
                    fillOpacity="1"
                    fillRule="evenodd"
                  />
                </g>
                <path
                  fill="#5271ff"
                  d="M 187.496094 196.144531 L 187.496094 180.054688 C 194.296875 180.054688 200.578125 177.816406 205.636719 174.035156 L 221.050781 189.449219 C 226.347656 194.746094 232.835938 188.894531 226.738281 182.796875 L 211.808594 167.863281 C 215.585938 162.804688 217.828125 156.527344 217.828125 149.722656 C 217.828125 132.972656 204.246094 119.394531 187.496094 119.394531 L 187.496094 111.109375 C 185.21875 111.109375 182.941406 111.722656 178.449219 112.941406 C 167.089844 116.03125 158.558594 119.9375 149.417969 126.875 C 148.679688 131.167969 150.15625 140.722656 150.859375 144.464844 C 154.851562 165.765625 167.886719 186.269531 187.496094 196.144531 Z M 187.496094 171.328125 C 175.566406 171.328125 165.890625 161.65625 165.890625 149.722656 C 165.890625 137.792969 175.566406 128.121094 187.496094 128.121094 C 199.425781 128.121094 209.101562 137.792969 209.101562 149.722656 C 209.101562 161.65625 199.425781 171.328125 187.496094 171.328125 Z M 187.496094 171.328125 "
                  fillOpacity="1"
                  fillRule="evenodd"
                />
                <g clipPath="url(#ed596e9058)">
                  <path
                    fill="#ffde59"
                    d="M 207.019531 153.050781 C 207.097656 150.394531 207.097656 150.390625 207.179688 147.738281 L 203.070312 146.132812 C 202.476562 144.566406 202.179688 143.78125 201.585938 142.21875 L 203.601562 138.289062 C 201.78125 136.363281 201.777344 136.359375 199.957031 134.421875 L 195.921875 136.195312 L 192.109375 134.472656 L 190.753906 130.273438 L 185.445312 130.113281 L 183.839844 134.222656 C 182.277344 134.816406 181.488281 135.113281 179.925781 135.707031 L 176 133.691406 C 174.066406 135.507812 174.0625 135.511719 172.128906 137.332031 L 173.898438 141.371094 C 173.21875 142.894531 172.871094 143.664062 172.183594 145.183594 L 167.980469 146.539062 C 167.898438 149.191406 167.898438 149.199219 167.816406 151.847656 L 171.925781 153.457031 C 172.519531 155.015625 172.816406 155.804688 173.410156 157.371094 L 171.398438 161.292969 C 173.21875 163.226562 173.222656 163.230469 175.035156 165.164062 L 179.078125 163.394531 C 180.605469 164.078125 181.375 164.421875 182.894531 165.109375 L 184.246094 169.3125 L 189.558594 169.476562 L 191.164062 165.367188 C 192.726562 164.773438 193.511719 164.476562 195.078125 163.882812 L 199.003906 165.898438 L 202.871094 162.257812 L 201.101562 158.21875 C 201.792969 156.695312 202.136719 155.921875 202.824219 154.398438 Z M 187.5 161.34375 C 186.742188 161.34375 185.988281 161.269531 185.246094 161.121094 C 184.503906 160.972656 183.78125 160.753906 183.078125 160.464844 C 182.378906 160.171875 181.714844 159.816406 181.082031 159.394531 C 180.453125 158.972656 179.871094 158.496094 179.335938 157.960938 C 178.796875 157.421875 178.320312 156.839844 177.898438 156.210938 C 177.476562 155.578125 177.121094 154.914062 176.832031 154.214844 C 176.542969 153.511719 176.320312 152.792969 176.175781 152.046875 C 176.027344 151.304688 175.953125 150.554688 175.953125 149.792969 C 175.953125 149.035156 176.027344 148.285156 176.175781 147.542969 C 176.324219 146.796875 176.542969 146.078125 176.832031 145.375 C 177.121094 144.675781 177.476562 144.011719 177.898438 143.378906 C 178.320312 142.75 178.796875 142.167969 179.335938 141.628906 C 179.871094 141.09375 180.453125 140.617188 181.085938 140.195312 C 181.714844 139.773438 182.378906 139.417969 183.082031 139.128906 C 183.78125 138.835938 184.503906 138.617188 185.246094 138.46875 C 185.988281 138.320312 186.742188 138.25 187.5 138.25 C 188.257812 138.25 189.007812 138.320312 189.75 138.46875 C 190.496094 138.617188 191.21875 138.835938 191.917969 139.125 C 192.617188 139.417969 193.285156 139.773438 193.914062 140.195312 C 194.542969 140.613281 195.128906 141.09375 195.664062 141.628906 C 196.199219 142.164062 196.679688 142.75 197.101562 143.378906 C 197.519531 144.007812 197.878906 144.675781 198.167969 145.375 C 198.457031 146.074219 198.675781 146.796875 198.824219 147.542969 C 198.972656 148.285156 199.046875 149.035156 199.046875 149.792969 C 199.046875 150.550781 198.972656 151.304688 198.824219 152.046875 C 198.675781 152.789062 198.457031 153.511719 198.167969 154.214844 C 197.875 154.914062 197.519531 155.578125 197.097656 156.210938 C 196.679688 156.839844 196.199219 157.421875 195.664062 157.960938 C 195.128906 158.496094 194.542969 158.972656 193.914062 159.394531 C 193.285156 159.816406 192.617188 160.171875 191.917969 160.460938 C 191.21875 160.753906 190.496094 160.972656 189.75 161.121094 C 189.007812 161.269531 188.257812 161.34375 187.5 161.34375 Z M 187.5 161.34375 "
                    fillOpacity="1"
                    fillRule="nonzero"
                  />
                </g>
              </svg>
                </Link>
              </div>
              <div className="text-gray-400">We are a leading inspection, audit, and consultancy firm dedicated to ensuring quality and compliance across industries. With a team of experienced professionals across Europe, we provide precise and reliable services to help our clients maintain high standards, reduce risks, and achieve operational excellence. Trust Inspection With Us to be your eyes and ears, wherever your needs take you.</div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

              {/* 2nd block */}
              {/* <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Products</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Web Studio</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">DynamicBox Flex</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Programming Forms</Link>
                  </li>
                </ul>
              </div> */}

              {/* 3rd block */}
              {/* <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Resources</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Nostrud exercitation</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Visual mockups</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Nostrud exercitation</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Visual mockups</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Nostrud exercitation</Link>
                  </li>
                </ul>
              </div> */}

              {/* 4th block */}
              {/* <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Company</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Consectetur adipiscing</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Labore et dolore</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Consectetur adipiscing</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Labore et dolore</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Consectetur adipiscing</Link>
                  </li>
                </ul>
              </div> */}

            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Social links */}
            {/* <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Twitter">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Github">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Facebook">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Linkedin">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </Link>
              </li>
            </ul> */}

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; Inspectiwithus.com All rights reserved.</div>

          </div>

        </div>
      </div>
    </footer>
  )
}
