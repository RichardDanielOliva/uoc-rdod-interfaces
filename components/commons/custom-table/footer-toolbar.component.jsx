/*
Copyright (c) 2021, company LTD, company INC (company)
company SOFTWARE LICENSE

0. Definitions.

"License" refers the Licence Software Agreement covered by a Master Agreement and/or related Order Forms between
your organisation and company.

"You" refers to the Licensee. The licensee could be a person or a organisation.

"Source Code" refers to any copyrightable work licensed under the License.

1. The Source Code must retain the above Copyright notice, this list of conditions and the following disclaimer.
You may NOT delete, alter or obscure the copyright, trademark, or other proprietary rights notices appearing in
the Source Code.

2. You are free to make modifications to the Source Code in compliance with the License. You are also free to
compile the source after modifying it and using the compiled product obtained thereafter in compliance with the
License.

3. Except if permitted in the License, you may NOT under any circumstance copy, redistribute and/or republish the
source or a work based on it (which includes binary or object code compiled from it) in part or whole.

4. Neither the name of the Copyright holder nor the names of its contributors may be used to endorse or promote
products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE
USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { DEFAULT_TABLE_PAGE_SIZE_OPTIONS } from '../../../config/constants';

import { 
  TableOptions,
  PageInfoContainer,
} from './custom-table.styles';

const FooterToolbar = ({
  pageOptions,
  gotoPage,
  setPageSize,
  state
}) => {
  if(pageOptions.length === 1) return null;

  let { pageIndex, pageSize } = state
  return (
    <TableOptions>
        <PageInfoContainer>
          <p style={{ fontSize: '1em' }}>page <strong> {pageIndex + 1} of {pageOptions.length}</strong> | go to page <input
              type={'number'}
              min={1}
              max={pageOptions.length}
              defaultValue={pageIndex + 1}
              onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(page)
              }}
              style={{ width: '40px', fontSize: '1em', textAlign: 'right' }}
            /> {/*| rows per page <select
              style={{ fontSize: '1em' }}
              value={pageSize}
              onChange={e => {
                setPageSize(Number(e.target.value))
              }}
            >
              {DEFAULT_TABLE_PAGE_SIZE_OPTIONS.map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
              </select>*/}
          </p>
        </PageInfoContainer>
    </TableOptions>
  );
}

export default FooterToolbar;