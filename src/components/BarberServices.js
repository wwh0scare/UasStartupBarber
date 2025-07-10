function BarberServices() {
    return (
      <section className="max-w-xl">
        <h2 className="text-center text-3xl py-4 text-red-800">Barber Services</h2>
        <ul className="max-w-6xl grid grid-cols-1 grid-rows-1 gap-2 text-center mx-auto">
        <div className="text-left">
        <div className="flex items-end">
        <h2 className="font-bold min-w-fit">Signature Cut & Style</h2>
        <div className="h-px w-full mb-1 bg-neutral-400"></div>
        <p>Rp75k+</p>
        </div>
        <p>First visit or has it been longer than 5 weeks? Please book this service!</p>
        </div>
        <div className="text-left">
        <div className="flex items-end">
        <h2 className="font-bold min-w-fit">Maintenance Cut</h2>
        <div className="h-px w-full mb-1 bg-neutral-400"></div>
        <p>Rp35k+</p>
        </div>
        <p>30 min service with just the basics. For those visiting every 5 weeks or less</p>
        </div>
        <div className="text-left">
        <div className="flex items-end">
        <h2 className="font-bold min-w-fit">Barber Cut - 13 & Under</h2>
        <div className="h-px w-full mb-1 bg-neutral-400"></div>
        <p>Rp31k+</p>
        </div>
        <p>Barber style haircuts (clipper and short scissor cuts)</p>
        </div>
        <div className="text-left">
        <div className="flex items-end">
        <h2 className="font-bold min-w-fit">Advanced Fade/Design</h2>
        <div className="h-px w-full mb-1 bg-neutral-400"></div>
        <p>Rp65k+</p>
        </div>
        <p>$1/min</p>
        </div>
        <div className="text-left">
        <div className="flex items-end">
        <h2 className="font-bold min-w-fit">Beard Trim</h2>
        <div className="h-px w-full mb-1 bg-neutral-400"></div>
        <p>Rp22k+</p>
        </div>
        </div>
        <div className="text-left">
        <div className="flex items-end">
        <h2 className="font-bold min-w-fit">Scalp Treatment</h2>
        <div className="h-px w-full mb-1 bg-neutral-400"></div>
        <p>Rp22k+</p>
        </div>
        </div>
        </ul>
      </section>
    );
  }
  
  export default BarberServices;