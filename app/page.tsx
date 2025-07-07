import Image from "next/image";

function FirstImpression() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full px-20 py-16 bg-cadet-gray">
          <div className="flex-1 max-w-[600px] text-center md:text-left order-1 md:order-1">
            <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left mb-4">
              Mihai Mitrea
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              I should write a short description about myself here, but I don't know what to write...
            </p>
          </div>
            
          <div className="flex-1 max-w-[400px] order-2 md:order-2">
              <Image
                  src="/cat.jpg"
                  alt="Image"
                  width={900}
                  height={900}
                  className="w-full h-auto rounded-[20px] object-contain"
              />
          </div>
        </div>
    );
}

function InformationSection() {
  return (
    <div className="flex flex-col items-center justify-center text-justify gap-4 w-4/5 md:w-3/4 px-4 py-8">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin lectus quis libero porta pretium. Maecenas consequat lectus libero, quis laoreet tellus dictum id. Donec lobortis blandit dui, et feugiat lectus sollicitudin id. In rutrum vitae quam eu vestibulum. Suspendisse aliquet malesuada turpis, vitae tempor tortor consequat vel. Vestibulum cursus eu sapien non blandit. Etiam ullamcorper maximus dui, ac placerat ligula facilisis quis. Cras scelerisque, sem a suscipit elementum, nulla augue convallis lectus, et congue urna augue non velit. Donec vitae pulvinar massa, eget lacinia ante. Morbi a leo non elit convallis dictum vel vitae dui. Vivamus cursus, lorem at luctus efficitur, urna metus eleifend erat, vel blandit eros ante eget odio. Phasellus vitae ornare odio, a tempus arcu. Fusce vitae erat quis leo dapibus posuere a id dolor. Integer lobortis libero a blandit rhoncus.Nulla sagittis orci nec risus rhoncus consectetur. Aliquam viverra magna sem, in eleifend quam condimentum non. Maecenas ultrices nisi erat, non euismod nisi pretium dignissim. Vivamus egestas ligula mi, a laoreet magna egestas vel. Cras et quam eu metus egestas suscipit. Nam aliquam sapien nec quam aliquam pellentesque sed sed nunc. Phasellus id ligula eros. Suspendisse euismod sodales suscipit. Phasellus ut cursus massa. Aliquam eget pulvinar nibh. Ut vitae leo eu justo interdum tempor. Praesent eleifend, felis a porttitor aliquam, augue justo semper leo, quis commodo sapien urna nec sem. Sed vitae imperdiet arcu. Morbi euismod turpis ac eros sollicitudin egestas.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec hendrerit vitae nunc non viverra. Maecenas id euismod ante. Nunc dolor augue, iaculis ac ultricies in, viverra id ipsum. Quisque pellentesque varius nisl, eget congue est. Nulla vulputate cursus mauris, eu cursus ante fermentum eu. Sed et malesuada orci.Phasellus erat odio, aliquet eu sagittis vitae, tempus nec massa. Pellentesque porta hendrerit nisi eu mattis. Nulla eu massa et enim viverra condimentum. Aenean sit amet vehicula nisl, eu condimentum ipsum. Fusce pellentesque mollis mattis. Phasellus a blandit erat. Aliquam tortor dolor, maximus a justo a, consectetur maximus orci. Sed efficitur enim consequat, vehicula ligula at, laoreet nulla. Nunc tristique mollis massa sed eleifend. Nullam nisi mauris, pulvinar in elit et, rutrum vulputate lectus. Nullam eu mauris viverra, dictum neque sit amet, tristique metus. Sed sed lorem a orci mattis congue. Suspendisse a quam nulla.Donec viverra scelerisque velit sit amet ullamcorper. Donec suscipit purus a quam pretium facilisis. Praesent condimentum convallis elit. Vestibulum consectetur sollicitudin est nec commodo. Ut tempor ac sapien eget ultrices. Nulla orci massa, pharetra ut molestie id, consequat vitae ante. Cras vitae libero faucibus, porttitor elit et, gravida elit. Aliquam tincidunt erat massa, at pellentesque sapien ultricies pellentesque. Nullam tristique diam et ante pharetra consequat. Phasellus sit amet ullamcorper lectus. Mauris in sagittis neque. Fusce lectus leo, iaculis nec sodales a, sodales pretium lacus. Quisque et quam quis nulla sagittis cursus et a est. Pellentesque non risus quis mauris faucibus venenatis convallis non odio. Mauris sagittis nec massa non aliquet.Etiam enim nunc, fringilla vitae egestas vitae, varius vel metus. Nulla facilisi. Duis semper orci tellus, accumsan elementum ante hendrerit eu. Quisque in felis molestie, tempor lorem in, placerat odio. Fusce et nibh id sapien volutpat pulvinar sed eu neque. Maecenas vel nisl enim. Fusce sed mauris id nisi venenatis commodo. Proin facilisis mattis sapien. Fusce rutrum cursus elit vel tincidunt. Ut consectetur felis vulputate euismod luctus. Quisque ultricies risus et augue eleifend, ac tempus mauris dignissim. Sed at faucibus velit. Morbi tempor magna quis mi lacinia, ut blandit nibh accumsan.Aenean interdum, libero ac condimentum hendrerit, ante neque vestibulum mi, non feugiat mauris ex ac neque. Suspendisse eleifend tempor euismod. Proin viverra placerat tellus sed eleifend. Sed tristique, mauris non pretium efficitur, mi sem auctor metus, vitae luctus nisi justo in justo. Duis at volutpat quam, finibus aliquet odio. Ut tempor velit urna, a viverra quam consequat vitae. Nam sit amet eleifend quam, et posuere erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam at nibh vulputate, interdum diam eu, mattis dolor. In vitae auctor leo. Sed ligula arcu, varius cursus porttitor ac, dictum non lacus.Donec non justo nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean rhoncus, urna ut gravida ornare, neque ante aliquet dui, eu convallis magna justo a lectus. Curabitur sit amet diam vel ex placerat consequat a a sapien. Sed porttitor hendrerit arcu vel semper. Curabitur eleifend lorem neque, consequat interdum risus eleifend eu. Proin varius orci nisi, venenatis hendrerit lectus faucibus eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet rhoncus mattis. Vestibulum pretium ex id elit maximus, ut venenatis erat condimentum.Vestibulum quis eleifend turpis, ac malesuada nibh. Nullam rutrum purus sit amet venenatis ornare. Donec sit amet sem id arcu sodales tincidunt non sed urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed non luctus justo. Aliquam nulla lectus, suscipit ac lacinia vitae, laoreet vitae ante. Aliquam posuere at augue nec elementum. Integer molestie mauris in est cursus, id volutpat ante laoreet. Aenean velit purus, venenatis quis orci a, fermentum consequat arcu. Morbi mattis ante risus, sit amet accumsan augue accumsan vitae.Nam imperdiet ornare molestie. Aenean accumsan, libero volutpat pretium ullamcorper, ligula mauris consequat lacus, vitae egestas dui mauris et massa. Maecenas in nunc eu augue congue pellentesque id a ex. Praesent in ornare felis. Quisque porttitor magna lacus, a imperdiet nisl commodo in. Ut et eros a turpis consequat malesuada. Quisque tincidunt consectetur enim at varius. Donec ut lacus urna. Duis gravida interdum justo, at ultrices nisl gravida posuere. Suspendisse at massa commodo, vehicula risus sed, vehicula ante. Sed malesuada, nisl eu malesuada sollicitudin, dolor felis vulputate elit, in tempor libero elit a urna. Nulla laoreet orci in finibus elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis ut urna at lacus facilisis rutrum sed sed quam. Aenean condimentum tortor vitae iaculis ornare.
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <FirstImpression/>
      <InformationSection/>
    </main>
  );
}
