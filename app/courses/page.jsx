'use client';
import React from 'react';
import Search from '@/app/ui/courses/search';
import { useState } from 'react';

export default function page() {
  // const [first, setfirst] = useState(second)
  const [show, setShow] = useState(true);
  return (
    <div>
      <div className="fixed top-0 w-full">
        <div className="bg-red-300">
          <div className="px-6 py-6">
            <Search />
          </div>
        </div>

        <div className="flex w-full items-center justify-between rounded-b bg-white px-6 py-2 shadow-sm shadow-black">
          <div className="flex items-center">
            <button
              type="button"
              className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
              aria-expanded="false"
              onClick={() => setShow(!show)}
            >
              <span>所在地区</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center">
            <button className="px-4 py-2 text-gray-600">Next</button>
            <button className="px-4 py-2 text-gray-600">Last</button>
          </div>
        </div>
        <div
          style={{
            display: show ? 'block' : 'none',
          }}
          className="z-10 grid grid-cols-1 divide-y rounded-b bg-white shadow-sm shadow-black"
        >
          <div className="p-6">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <a
                  href="javascript:void(0)"
                  className="block w-full justify-center rounded-lg bg-slate-300 px-4 py-3 text-center text-sm font-semibold hover:bg-slate-700"
                >
                  阿旗
                </a>
              </div>
              <div>
                <a
                  href="javascript:void(0)"
                  className="block w-full justify-center rounded-lg bg-slate-300 px-4 py-3 text-center text-sm font-semibold hover:bg-slate-700"
                >
                  巴林左旗
                </a>
              </div>
              <div>
                <a
                  href="javascript:void(0)"
                  className="block w-full justify-center rounded-lg bg-slate-300 px-4 py-3 text-center text-sm font-semibold hover:bg-slate-700"
                >
                  巴林右旗
                </a>
              </div>
              <div>
                <a
                  href="javascript:void(0)"
                  className="block w-full justify-center rounded-lg bg-slate-300 px-4 py-3 text-center text-sm font-semibold hover:bg-slate-700"
                >
                  克什克腾旗
                </a>
              </div>
              <div>
                <a
                  href="javascript:void(0)"
                  className="block w-full justify-center rounded-lg bg-slate-300 px-4 py-3 text-center text-sm font-semibold hover:bg-slate-700"
                >
                  林西县
                </a>
              </div>
              <div>
                <a
                  href="javascript:void(0)"
                  className="block w-full justify-center rounded-lg bg-slate-300 px-4 py-3 text-center text-sm font-semibold hover:bg-slate-700"
                >
                  翁牛特旗
                </a>
              </div>
              <div>
                <a
                  href="javascript:void(0)"
                  className="block w-full justify-center rounded-lg bg-slate-300 px-4 py-3 text-center text-sm font-semibold hover:bg-slate-700"
                >
                  红山区
                </a>
              </div>
              <div>
                <a
                  href="javascript:void(0)"
                  className="block w-full justify-center rounded-lg bg-slate-300 px-4 py-3 text-center text-sm font-semibold hover:bg-slate-700"
                >
                  松山区
                </a>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <button
                  type="button"
                  className="w-full justify-center rounded-lg bg-slate-300 px-4 py-3 text-sm font-semibold hover:bg-slate-700"
                >
                  重置
                </button>
              </div>
              <div className="col-span-2">
                <button className="w-full justify-center rounded-lg bg-red-300 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-700">
                  确定
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mx-4 mt-40 columns-2">
        <div className="mb-4 rounded-xl bg-gray-50 p-2 shadow-sm">
          <div className="flex p-4">
            <h3 className="ml-2 text-blue-600">中式面点师</h3>
          </div>
          <p>
            <span className="text-gray-900">新东方</span>
          </p>
          <p>
            <span className="text-sm text-gray-600">A类33天（260课时）</span>
          </p>
          <p>
            <span className="text-sm text-gray-600">开课时间:</span>
            <span className="text-sm text-gray-900">2024.5.28</span>
          </p>
          <p className="columns-2">
            <span className="text-sm text-gray-600">地址：</span>
            <span className="block text-sm text-gray-900">
              新东方新东方新东方新东方
            </span>
          </p>
        </div>
        <img class="mb-4" src="https://source.unsplash.com/random/1" />
        <img class="mb-4" src="https://source.unsplash.com/random/2" />
        <img class="mb-4" src="https://source.unsplash.com/random/3" />
        <img class="mb-4" src="https://source.unsplash.com/random/4" />
        <img class="mb-4" src="https://source.unsplash.com/random/5" />
        <img class="mb-4" src="https://source.unsplash.com/random/6" />
        <img class="mb-4" src="https://source.unsplash.com/random/7" />
        <img class="mb-4" src="https://source.unsplash.com/random/8" />
        <img class="mb-4" src="https://source.unsplash.com/random/9" />
      </div>
    </div>
  );
}
