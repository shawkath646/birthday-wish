import BirthdayBox from "@/components/BirthdayBox";
import SHAS from "shas-app-controller";
import { BrandDataType } from "shas-app-controller/types";

export default async function Page() {

  const { brandData } = await SHAS();

  return <BirthdayBox brandData={brandData as BrandDataType} />
}