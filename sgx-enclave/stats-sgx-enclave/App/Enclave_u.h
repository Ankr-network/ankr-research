#ifndef ENCLAVE_U_H__
#define ENCLAVE_U_H__

#include <stdint.h>
#include <wchar.h>
#include <stddef.h>
#include <string.h>
#include "sgx_edger8r.h" /* for sgx_satus_t etc. */


#include <stdlib.h> /* for size_t */

#define SGX_CAST(type, item) ((type)(item))

#ifdef __cplusplus
extern "C" {
#endif

void SGX_UBRIDGE(SGX_NOCONVENTION, ocall_print, (const char* str));

sgx_status_t calculate_average(sgx_enclave_id_t eid, float* retval);
sgx_status_t add_integer(sgx_enclave_id_t eid, int num);
sgx_status_t calculate_median(sgx_enclave_id_t eid, float* retval);
sgx_status_t calculate_std(sgx_enclave_id_t eid, float* retval);

#ifdef __cplusplus
}
#endif /* __cplusplus */

#endif
