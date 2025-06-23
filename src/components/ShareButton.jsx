import CopyLinkButton from "./CopyLinkButton";
import KakaoShareButton from "./KakaoShareButton";

function ShareButtons() {
    return (
      <div className="flex justify-center mt-4 space-x-4">
        <CopyLinkButton />
        <KakaoShareButton />
      </div>
    );
  }

export default ShareButtons;