import { IconArrowRight, IconClock, IconBarrierBlock } from '@tabler/icons-react';

const UnderConstruction = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#171717] px-4 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative z-10 text-center">
        <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center">
          <div className="absolute inset-0 animate-ping rounded-full bg-white/20" style={{ animationDuration: '2s' }} />
          <div className="absolute inset-2 rounded-full bg-white/10" />
          <IconBarrierBlock className="relative h-12 w-12 text-white" strokeWidth={1.5} />
        </div>

        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
          Under Construction
        </h1>

        <p className="mb-8 max-w-md text-lg text-neutral-400">
          We&apos;re working hard to bring you something amazing. This page will be available soon.
        </p>

        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
          <IconClock className="h-4 w-4 text-white" />
          <span className="text-sm text-neutral-400">Coming Soon</span>
        </div>

        <div className="mx-auto mb-8 max-w-xs">
          <div className="mb-2 flex justify-between text-sm text-neutral-400">
            <span>Progress</span>
            <span className="text-white">75%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <div 
              className="h-full rounded-full bg-linear-to-r from-white to-neutral-500 transition-all duration-1000"
              style={{ width: '75%' }}
            />
          </div>
        </div>

        <button className="group inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white">
          <span>Get notified when we launch</span>
          <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      <div className="absolute bottom-8 text-center text-sm text-neutral-500">
        <p>Thank you for your patience</p>
      </div>
    </div>
  );
};

export default UnderConstruction;