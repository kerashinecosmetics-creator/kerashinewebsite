// Subtle moving gradient blobs behind the whole site (pure CSS, GPU-friendly).
export default function Blobs() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="blob-a absolute -left-[10vw] top-[5vh] h-[45vw] w-[45vw] max-h-[640px] max-w-[640px] rounded-full bg-beige/60 blur-[110px]" />
      <div className="blob-b absolute -right-[8vw] top-[40vh] h-[40vw] w-[40vw] max-h-[560px] max-w-[560px] rounded-full bg-gold/20 blur-[120px]" />
    </div>
  );
}
