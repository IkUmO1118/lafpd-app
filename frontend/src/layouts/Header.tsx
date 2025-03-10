import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";

const Header: React.FC = () => {
  const [stickyVisible, setStickyVisible] = useState(false);
  const normalHeaderRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (normalHeaderRef.current) {
        const threshold = normalHeaderRef.current.offsetHeight;
        setStickyVisible(window.scrollY > threshold);
      }
    };

    // 初回チェック
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      {/* 通常ヘッダー */}
      <header
        ref={normalHeaderRef}
        className="border-1 border-neutral-300/50 bg-neutral-50"
      >
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-6 py-5">
          <div className="text-2xl font-bold tracking-tight text-cyan-950">
            実験動物施設総合評価
          </div>
          <li className="flex items-center gap-10">
            <NavLink
              to="home"
              className="text-sm text-neutral-700 hover:underline"
            >
              ホーム
            </NavLink>
            <NavLink
              to="diagnosis"
              className="text-sm text-neutral-700 hover:underline"
            >
              性能診断
            </NavLink>
            <NavLink
              to="contact"
              className="text-sm text-neutral-700 hover:underline"
            >
              お問い合わせ
            </NavLink>
            <Button
              as="link"
              type="primary"
              className="cursor-pointer rounded-full px-5 py-2 text-sm font-bold decoration-0 duration-75"
            >
              診断する
            </Button>
          </li>
        </div>
      </header>

      {/* スクロール時に表示するstickyヘッダー */}
      <header
        className={`fixed top-2 left-0 z-[1000] block w-full transition-opacity duration-200 ${
          stickyVisible
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* 背景色は付与せず、中央のコンテナにのみ白い背景を設定 */}
        <div className="mx-auto flex w-[90%] max-w-[1200px] items-center justify-between rounded-full bg-white px-20 py-3 shadow-[0_4px_10px_rgba(0,0,0,0.15)]">
          <div className="text-lg font-bold tracking-tight text-cyan-950">
            実験動物施設総合評価
          </div>
          <div className="flex items-center gap-12">
            <div className="flex gap-10">
              <NavLink
                to="home"
                className="text-sm text-neutral-800 hover:underline"
              >
                ホーム
              </NavLink>
              <NavLink
                to="diagnosis"
                className="text-sm text-neutral-800 hover:underline"
              >
                性能診断
              </NavLink>
              <NavLink
                to="contact"
                className="text-sm text-neutral-800 hover:underline"
              >
                お問い合わせ
              </NavLink>
            </div>
            <Button
              as="link"
              type="primary"
              className="cursor-pointer rounded-sm px-5 py-2 text-sm font-bold decoration-0 duration-75"
            >
              診断する
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
