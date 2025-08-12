export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-08-10'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "sk1BjKC8HxHvfrOKbRgv7mY5XYcWlKioDBonQGWtgcLCa7pQw4FKUP5cwzhUaJABvpCSd6ljCEXffvUggX9TXyItjnBHYbToTmAdrapnGcZKaVz17nDYsH4W6GrxP0tyIKkkXqfsk5KLdGa6zNZlB2LeGz1esDPelDWBeGXPX8N4pBDf2eUN",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
