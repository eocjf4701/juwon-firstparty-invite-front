function MapImageLink() {
    return (
      <div className="max-w-md mx-auto mt-6 border border-gray-300 rounded-lg overflow-hidden">
        <a
          href="https://map.kakao.com/?urlX=476200&urlY=1138653&urlLevel=3&map_type=TYPE_MAP&map_hybrid=false"
          target="_blank"
          rel="noreferrer"
        >
          <img
            width="504"
            height="310"
            src="https://map2.daum.net/map/mapservice?FORMAT=PNG&SCALE=2.5&MX=476200&MY=1138653&S=0&IW=504&IH=310&LANG=0&COORDSTM=WCONGNAMUL&logo=kakao_logo"
            alt="오시는 길 지도"
            className="w-full"
            style={{ border: '1px solid #ccc' }}
          />
        </a>
        <div
          className="p-2 border-t border-gray-200 bg-gray-50 flex justify-between items-center"
          style={{ fontSize: '12px' }}
        >
          <strong>
            <img
              src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png"
              alt="카카오맵 로고"
              width="72"
              height="16"
            />
          </strong>
          <a
            href="https://map.kakao.com/?urlX=476200&urlY=1138653&urlLevel=3&map_type=TYPE_MAP&map_hybrid=false"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
            style={{ fontSize: '12px' }}
          >
            지도 크게 보기
          </a>
        </div>
      </div>
    );
  }
  
  export default MapImageLink;