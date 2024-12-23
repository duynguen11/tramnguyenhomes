import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaPhone, FaChevronRight } from "react-icons/fa";

import Avartar from "../../assets/images/Avatar2.jpg";

import "./Header.css";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 lg:px-8 fixed top-0 left-0 right-0 z-10 bg-white"
      >
        <div className="flex items-center lg:flex-1 pl-1">
          <a
            href="tel:0949651568"
            className="-m-1.5 p-1 rounded-full shadow-lg border-2 border-blue-500 animate-blink"
          >
            <img alt="" src={Avartar} className="h-12 w-12 rounded-full" />
          </a>
          <p className="text-sm font-bold text-blue-900 ms-3">
            TRÂM NGUYỄN HOMES
          </p>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            TRANG CHỦ
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            GIỚI THIỆU
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            DỰ ÁN
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            VIDEO
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            TIN TỨC
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            LIÊN HỆ
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="tel:0949651568"
            className="text-sm font-semibold text-white bg-red-500 hover:bg-red-700 px-4 py-2 rounded flex items-center"
          >
            GỌI 0949651568
            <span className="ms-2">
              <FaPhone />
            </span>
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-100 py-7 px-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between pb-6">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded p-2.5 text-gray-700"
            >
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div><hr />
          <div className="mt-5 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded px-6 py-2 text-base/7 font-semibold text-gray-600 hover:bg-gray-50"
                >
                  TRANG CHỦ
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded px-6 py-2 text-base/7 font-semibold text-gray-600 hover:bg-gray-50"
                >
                  GIỚI THIỆU
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded px-6 py-2 text-base/7 font-semibold text-gray-600 hover:bg-gray-50"
                >
                  DỰ ÁN
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded px-6 py-2 text-base/7 font-semibold text-gray-600 hover:bg-gray-50"
                >
                  TIN TỨC
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded px-6 py-2 text-base/7 font-semibold text-gray-600 hover:bg-gray-50"
                >
                  VIDEO
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded px-6 py-2 text-base/7 font-semibold text-gray-600 hover:bg-gray-50"
                >
                  LIÊN HỆ
                </a>
              </div>
            </div>
              <a href="tel:0949651568" className="flex items-center justify-between rounded bg-red-500 hover:bg-red-600 p-2 mt-5">
                <FaChevronRight className="text-white" />
                <p
                  className="pr-4 block rounded text-base/7 font-semibold text-white"
                >
                  GỌI NGAY 0949651568
                </p>
              </a>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
