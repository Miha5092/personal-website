
export function HeaderAndText({header, paragraphs}: {header: string, paragraphs: Array<string>}) {
    return (
        <div className="flex flex-col gap-4 w-full">
            <h2 className="text-2xl font-bold">{header}</h2>
            <div className="text-gray-700 text-justify break-words overflow-wrap-anywhere">
                {paragraphs.map((para, index) => (
                    <p key={index} className="mb-4 break-words overflow-wrap-anywhere">{para}</p>
                ))}
            </div>
        </div>
    )
}

export default function TextSection({textComponents} : {textComponents: Array<React.ReactNode>}) {
  return (
    <div className="flex flex-col items-center justify-center text-justify gap-4 w-4/5 md:w-3/4 px-4 py-8 max-w-full overflow-hidden">
      {textComponents.map((component, index) => (
          <div key={index} className="w-full max-w-full overflow-hidden">
            {component}
          </div>
      ))}
    </div>
  );
}