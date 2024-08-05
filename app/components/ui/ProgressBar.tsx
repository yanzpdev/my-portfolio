'use client';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/app/redux/store';
import { setScrollProgress } from '@/app/redux/features/scrollslice';
import { useEffect } from "react";

const ProgressBar = () => {
  const progress = useSelector((state: RootState) => state.scroll.progress);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      const scrollProgress = (scrollTop / windowHeight) * 100;
      dispatch(setScrollProgress(scrollProgress));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed bottom-0 w-full h-1.5 bg-gradient-to-r dark:from-violet-500 dark:to-fuchsia-500 from-sky-500 to-indigo-500 z-40`}
      style={{ width: `${progress}%` }}
    />
  )
}

export default ProgressBar