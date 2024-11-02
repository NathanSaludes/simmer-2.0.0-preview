import Asterisk from "../icons/Asterisk";
import Checkmark from "../icons/Checkmark";

const MenuForm = () => {
  return (
    <div className="bg-simmer-white">
      <div className="tab-triggers-slot flex min-h-[200px] items-center justify-center">
        &lt;Tab Triggers&gt;
      </div>
      <div className="tab-content">
        <div className="divide-y-2 divide-black border-t-2 border-black">
          <div className="grid divide-x-2 divide-black xl:grid-cols-[0.6fr_1fr]">
            <div className="left-panel flex flex-col divide-y-2 divide-black">
              <div className="flex items-center justify-center px-[50px] py-[30px]">
                <div className="flex basis-full items-center gap-[43px]">
                  <span className="inline-block rounded-lg bg-black px-4 py-2 text-simmer-white">
                    LEGEND
                  </span>
                  <div className="inline-flex items-center gap-4">
                    <span>
                      <Asterisk className="rotate-90" />
                    </span>
                    <span>CHEF'S CHOICE</span>
                  </div>
                </div>
              </div>
              <div className="h-full px-[50px] py-[48px]">
                <div className="flex h-full flex-col justify-between">
                  <h2>Brand Strategy</h2>
                  <div className="space-y-8">
                    <p>PHASE I</p>
                    <p>
                      From start-ups, local, international, personal brands,
                      communities, corporations, businesses and government
                      agencies— our services has no creative limits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-panel divide-y-2 divide-black">
              <div className="grid min-h-[200px] grid-cols-[150px_1fr] divide-x-2 divide-black">
                <div className="flex items-center justify-center">
                  <span>1</span>
                </div>
                <div className="py-[20px flex items-center px-[70px]">
                  <p>Tick your orders.</p>
                </div>
              </div>
              {Array.from({ length: 7 }).map((item, index) => (
                <div
                  key={index}
                  className="grid min-h-[100px] grid-cols-[150px_1fr] divide-x-2 divide-black"
                >
                  <button className="flex items-center justify-center hover:bg-black/10">
                    {true ? <Checkmark width={30} /> : null}
                  </button>
                  <div className="flex items-center px-[70px] py-[20px]">
                    <div className="basis-full space-y-6">
                      <p>SERVICE NAME</p>
                      <p>
                        From start-ups, local, international, personal brands,
                        communities, corporations, businesses and government
                        agencies.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid min-h-[200px] grid-cols-[200px_1fr] divide-x-2 divide-black">
            <button className="flex items-center justify-center hover:bg-black/10">
              {true ? <Checkmark width={30} /> : null}
            </button>
            <div className="py-[20px flex items-center px-[70px]">
              <p>CHEF'S CHOICE</p>
            </div>
          </div>
          <div className="flex min-h-[400px] items-center justify-center">
            <button className="min-h-[100px] rounded-full border-2 border-black px-20 py-3 hover:bg-black/5">
              LET’S WRAP IT UP!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuForm;
