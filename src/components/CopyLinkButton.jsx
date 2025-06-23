function CopyLinkButton() {
    const copyLink = () => {
      navigator.clipboard.writeText(window.location.href)
        .then(() => alert("초대장 주소가 복사되었습니다!"))
        .catch(() => alert("복사에 실패했습니다."));
    };
  
    return (
      <button
        onClick={copyLink}
        className="mt-4 text-sm text-blue-600 underline"
        type="button"
      >
        초대장 링크 복사
      </button>
    );
  }

export default CopyLinkButton;