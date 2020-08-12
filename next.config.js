module.exports = (phase, { defaultConfig }) => {

  if (process.env.NEXT_PUBLIC_OPENWEATHERMAP_KEY === undefined) {
    throw new Error("The challenge will not work without the env variable for the weather API key, this is information is required. Please provide the API key for the weather API on the NEXT_PUBLIC_OPENWEATHERMAP_KEY environment variable");
  }

  return defaultConfig
}