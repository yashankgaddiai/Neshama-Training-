import BrochureSlideshow from './BrochureSlideshow';

export default function VideoSection({ onEnroll }: { onEnroll?: () => void }) {
  return <BrochureSlideshow onEnroll={onEnroll} />;
}

