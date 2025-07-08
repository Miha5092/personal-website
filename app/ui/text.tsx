
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
    <div className="flex flex-col items-center justify-center text-justify mt-8 mb gap-4 w-5/6 md:w-4/5 lg:w-3/4 max-w-[1100px] overflow-hidden">
      {textComponents.map((component, index) => (
          <div key={index} className="w-full max-w-full overflow-hidden">
            {component}
          </div>
      ))}
    </div>
  );
}